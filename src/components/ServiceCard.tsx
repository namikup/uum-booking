import  { Clock, Zap, Car, Timer, Utensils } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service, isFastTrack: boolean) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  const getServiceIcon = () => {
    switch (service.type) {
      case 'cab':
        return <Car size={20} className="text-gray-500" />;
      case 'food':
        return <Utensils size={20} className="text-gray-500" />;
      default:
        return <Clock size={20} className="text-gray-500" />;
    }
  };

  const getServiceDetails = () => {
    if (service.type === 'cab' && service.details) {
      return (
        <>
          <div className="flex items-center gap-2">
            <Car size={20} className="text-gray-500" />
            <span className="text-gray-600">{service.details.distance} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={20} className="text-gray-500" />
            <span className="text-gray-600">{service.details.estimatedTime}</span>
          </div>
        </>
      );
    } else if (service.type === 'food' && service.details) {
      return (
        <>
          <div className="flex items-center gap-2">
            <Utensils size={20} className="text-gray-500" />
            <span className="text-gray-600">{service.details.cuisine}</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={20} className="text-gray-500" />
            <span className="text-gray-600">{service.details.preparationTime}</span>
          </div>
        </>
      );
    } else {
      return (
        <div className="flex items-center gap-2">
          <Clock size={20} className="text-gray-500" />
          <span className="text-gray-600">Available Slots: {service.availableSlots}</span>
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="space-y-2 mb-4">
          {getServiceDetails()}
        </div>
        <div className="space-y-3">
          {service.type === 'food' ? (
            <>
              <button
                onClick={() => onBook(service, false)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Order Now
              </button>
              <button
                onClick={() => onBook(service, true)}
                className="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                View Menu
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onBook(service, false)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                JustBook - RM{service.basePrice}
              </button>
              <button
                onClick={() => onBook(service, true)}
                className="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Zap size={20} />
                FastBook - RM{service.fastTrackPrice}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
 