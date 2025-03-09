import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Service } from '../types';

interface BookingModalProps {
  service: Service;
  isFastTrack: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function BookingModal({ service, isFastTrack, onClose, onConfirm }: BookingModalProps) {
  const [userBalance, setUserBalance] = useState(0);
  const [hasEnoughBalance, setHasEnoughBalance] = useState(false);

  useEffect(() => {
    setUserBalance(100); // Simulate a balance top-up
  }, []);

  useEffect(() => {
    setHasEnoughBalance(userBalance >= (isFastTrack ? service.fastTrackPrice : service.basePrice));
  }, [userBalance, isFastTrack, service]);

  const handleConfirm = () => {
    if (hasEnoughBalance) {
      setUserBalance(userBalance - (isFastTrack ? service.fastTrackPrice : service.basePrice));
      onConfirm();
    } else {
      alert("Insufficient balance! Please top up.");
    }
  };

  const redirectToTopUp = () => {
    window.location.href = "/topup";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Confirm Booking</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">{service.name}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Booking Type</p>
            <p className="font-medium">{isFastTrack ? 'Fast Track' : 'Standard'}</p>
            <p className="text-sm text-gray-600 mt-2">Total Amount</p>
            <p className="font-medium">RM{isFastTrack ? service.fastTrackPrice : service.basePrice}</p>
          </div>
          <button
            onClick={hasEnoughBalance ? handleConfirm : redirectToTopUp}
            className={`w-full py-3 text-white rounded-lg transition-colors ${
              hasEnoughBalance ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {hasEnoughBalance ? 'Confirm and Pay' : 'Top Up Now'}
          </button>
        </div>
      </div>
    </div>
  );
}