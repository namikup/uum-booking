import  { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Badminton Court',
    description: 'Professional indoor badminton court with proper lighting and equipment',
    basePrice: 0,
    fastTrackPrice: 2,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea',
    availableSlots: 8,
    type: 'activity'
  },
  {
    id: '2',
    name: 'Go Kart Racing',
    description: 'Exciting go-kart racing track with professional karts',
    basePrice: 35,
    fastTrackPrice: 55,
    image: 'https://www.mitrajaya.com.my/images/csr/2020/gokart-2020/01.jpg',
    availableSlots: 5,
    type: 'activity'
  },
  {
    id: '3',
    name: 'Tennis Court',
    description: 'Well-maintained tennis court with professional facilities',
    basePrice: 30,
    fastTrackPrice: 45,
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8',
    availableSlots: 6,
    type: 'activity'
  },
  {
    id: '4',
    name: 'Premium Cab Service',
    description: 'Luxury sedan with professional driver',
    basePrice: 20,
    fastTrackPrice: 35,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
    availableSlots: 10,
    type: 'cab',
    details: {
      distance: 8.5,
      estimatedTime: '20 mins'
    }
  },
  {
    id: '5',
    name: 'Express Cab',
    description: 'Quick and reliable transportation',
    basePrice: 15,
    fastTrackPrice: 25,
    image: 'https://img.freepik.com/free-vector/taxi-poster-with-realistic-yellow-public-service-car-with-reflection_1284-5444.jpg',
    availableSlots: 15,
    type: 'cab',
    details: {
      distance: 5.2,
      estimatedTime: '15 mins'
    }
  },
  {
    id: '6',
    name: 'Gourmet Pizza',
    description: 'Artisanal pizza with premium toppings',
    basePrice: 25,
    fastTrackPrice: 35,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
    availableSlots: 20,
    type: 'food',
    details: {
      cuisine: 'Italian',
      preparationTime: '30 mins'
    }
  },
  {
    id: '7',
    name: 'Sushi Platter',
    description: 'Fresh and premium sushi selection',
    basePrice: 40,
    fastTrackPrice: 55,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    availableSlots: 15,
    type: 'food',
    details: {
      cuisine: 'Japanese',
      preparationTime: '25 mins'
    }
  }
];
 