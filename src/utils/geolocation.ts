interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

// Major Indian metro cities and international cities where Kerala restaurants are commonly found
const majorCities: City[] = [
  // Indian Metro Cities
  { name: "Delhi", country: "India", lat: 28.7041, lng: 77.1025 },
  { name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777 },
  { name: "Bangalore", country: "India", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai", country: "India", lat: 13.0827, lng: 80.2707 },
  { name: "Hyderabad", country: "India", lat: 17.3850, lng: 78.4867 },
  { name: "Pune", country: "India", lat: 18.5204, lng: 73.8567 },
  { name: "Kolkata", country: "India", lat: 22.5726, lng: 88.3639 },
  { name: "Ahmedabad", country: "India", lat: 23.0225, lng: 72.5714 },
  { name: "Gurgaon", country: "India", lat: 28.4595, lng: 77.0266 },
  { name: "Noida", country: "India", lat: 28.5355, lng: 77.3910 },
  
  // International Cities with Kerala Diaspora
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773 },
  { name: "Doha", country: "Qatar", lat: 25.2854, lng: 51.5310 },
  { name: "Kuwait City", country: "Kuwait", lat: 29.3759, lng: 47.9774 },
  { name: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lng: 46.6753 },
  { name: "London", country: "UK", lat: 51.5074, lng: -0.1278 },
  { name: "New York", country: "USA", lat: 40.7128, lng: -74.0060 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631 }
];

// Calculate distance between two points using Haversine formula
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg: number): number => {
  return deg * (Math.PI/180);
};

export const getNearestCity = (): Promise<City> => {
  return new Promise((resolve, reject) => {
    // Default to Delhi if geolocation fails
    const defaultCity = majorCities.find(city => city.name === "Delhi") || majorCities[0];
    
    // Check if browser supports geolocation
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser");
      resolve(defaultCity);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Find nearest city
        let nearestCity = defaultCity;
        let minDistance = Number.MAX_VALUE;
        
        majorCities.forEach(city => {
          const distance = calculateDistance(latitude, longitude, city.lat, city.lng);
          if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
          }
        });
        
        resolve(nearestCity);
      },
      (error) => {
        console.log("Unable to retrieve your location", error);
        resolve(defaultCity);
      }
    );
  });
};