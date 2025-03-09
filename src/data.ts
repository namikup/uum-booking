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
    basePrice: 0,
    fastTrackPrice: 2,
    image: 'https://www.mitrajaya.com.my/images/csr/2020/gokart-2020/01.jpg',
    availableSlots: 5,
    type: 'activity'
  },
  {
    id: '3',
    name: 'Tennis Court',
    description: 'Well-maintained tennis court with professional facilities',
    basePrice: 0,
    fastTrackPrice: 2,
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8',
    availableSlots: 6,
    type: 'activity'
  },
  {
    id: '4',
    name: 'Swimming Pool',
    description: 'Olympic-sized pool',
    basePrice: 0,
    fastTrackPrice: 2,
    image: 'https://images.squarespace-cdn.com/content/v1/59e49c2ebff2000caf3f57e7/1531297818346-NBIHPJV40EKM6PKJZKGS/5.JPG?format=1000',
    availableSlots: 8,
    type: 'activity',
    details: {
      distance: 8.5,
      estimatedTime: '20 mins'
    }
  },
  {
    id: '5',
    name: 'Sapu',
    description: 'Quick and reliable transportation',
    basePrice: 4,
    fastTrackPrice: 4,
    image: 'https://img.freepik.com/free-vector/taxi-poster-with-realistic-yellow-public-service-car-with-reflection_1284-5444.jpg',
    availableSlots: 9,
    type: 'cab',
  },
  {
    id: '6',
    name: 'Kafeteria Proton',
    description: '9:00AM-10:00PM',
    basePrice: 25,
    fastTrackPrice: 35,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
    availableSlots: 0,
    type: 'food',
    details: {
      cuisine: 'Nasi Campur',
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
 