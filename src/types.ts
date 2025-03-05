export  interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  fastTrackPrice: number;
  image: string;
  availableSlots: number;
  type: 'activity' | 'cab' | 'food';
  details?: {
    distance?: number;
    estimatedTime?: string;
    cuisine?: string;
    preparationTime?: string;
  };
}

export interface Booking {
  id: string;
  serviceId: string;
  userId: string;
  date: string;
  time: string;
  isFastTrack: boolean;
  status: 'pending' | 'confirmed' | 'completed';
  totalAmount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
 