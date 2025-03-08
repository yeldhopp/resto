
interface City {
  name: string;
  state: string;
  lat: number;
  lng: number;
}

// Simple list of major NC cities with coordinates
const northCarolinaCities: City[] = [
  { name: "Reidsville", state: "NC", lat: 36.3548, lng: -79.6698 },
  { name: "Greensboro", state: "NC", lat: 36.0726, lng: -79.7920 },
  { name: "Charlotte", state: "NC", lat: 35.2271, lng: -80.8431 },
  { name: "Raleigh", state: "NC", lat: 35.7796, lng: -78.6382 },
  { name: "Wilmington", state: "NC", lat: 34.2104, lng: -77.8868 },
  { name: "Asheville", state: "NC", lat: 35.5951, lng: -82.5515 },
  { name: "Durham", state: "NC", lat: 35.9940, lng: -78.8986 },
  { name: "Winston-Salem", state: "NC", lat: 36.0999, lng: -80.2442 },
  { name: "Fayetteville", state: "NC", lat: 35.0527, lng: -78.8784 },
  { name: "Cary", state: "NC", lat: 35.7915, lng: -78.7811 }
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
    // Default to Reidsville (corporate HQ) if geolocation fails
    const defaultCity = northCarolinaCities.find(city => city.name === "Reidsville") || northCarolinaCities[0];
    
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
        
        northCarolinaCities.forEach(city => {
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
