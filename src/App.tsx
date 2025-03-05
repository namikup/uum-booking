import  { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import BookingModal from './components/BookingModal';
import { services } from './data';
import { Service } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isFastTrack, setIsFastTrack] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'activity' | 'cab' | 'food'>('all');

  const handleBook = (service: Service, fastTrack: boolean) => {
    setSelectedService(service);
    setIsFastTrack(fastTrack);
  };

  const handleConfirmBooking = () => {
    alert('Booking confirmed! Redirecting to payment...');
    setSelectedService(null);
  };

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.type === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Available Services
          </h2>
          <p className="text-gray-600 mb-6">Book your favorite activities with priority options</p>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('activity')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'activity' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600'
              }`}
            >
              Activities
            </button>
            <button
              onClick={() => setActiveCategory('cab')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'cab' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600'
              }`}
            >
              SAP
            </button>
            <button
              onClick={() => setActiveCategory('food')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'food' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600'
              }`}
            >
              Cafeteria
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={handleBook}
            />
          ))}
        </div>
      </main>
      <Navbar />
      {selectedService && (
        <BookingModal
          service={selectedService}
          isFastTrack={isFastTrack}
          onClose={() => setSelectedService(null)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
}
 
 