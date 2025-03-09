
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, ShoppingCart } from "lucide-react";
import { getNearestCity } from "@/utils/geolocation";

const HeroSection = () => {
  const [nearestCity, setNearestCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const city = await getNearestCity();
        setNearestCity(`${city.name}`);
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/lovable-uploads/f73dbaee-92bb-4652-bb6d-6ac1e9f0f309.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-cocinaRed/70 to-cocinaOrange/70 z-10" />
      
      <div className="container mx-auto relative z-20 px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-shadow">
            {!isLoading && nearestCity ? 
              `Discover Authentic Indian Cuisine near ${nearestCity}` : 
              "Discover Authentic Indian Cuisine"}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Your gateway to the vibrant flavors and rich traditions of India - from restaurant-quality meals to authentic grocery ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" className="bg-white text-cocinaRed hover:bg-white/90 text-lg px-8 py-6">
              <UtensilsCrossed className="mr-2 h-5 w-5" />
              <a href="https://restaurants.cocinaindia.com" className="font-medium">
                Order Food
              </a>
            </Button>
            <Button size="lg" className="bg-cocinaYellow text-cocinaDarkBrown hover:bg-cocinaYellow/90 text-lg px-8 py-6">
              <ShoppingCart className="mr-2 h-5 w-5" />
              <a href="https://groceries.cocinaindia.com" className="font-medium">
                Shop Groceries
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
