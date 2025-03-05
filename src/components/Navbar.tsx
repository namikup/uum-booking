import  { CalendarCheck, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="flex justify-around p-4">
        <button className="flex flex-col items-center text-gray-600">
          <CalendarCheck size={24} />
          <span className="text-xs mt-1">Bookings</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </nav>
  );
}
 