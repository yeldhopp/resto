
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, ShoppingCart } from "lucide-react";
import { getNearestCity } from "@/utils/geolocation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HeroSection = () => {
  const [nearestCity, setNearestCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("slide1");

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

    // Auto-rotate slider every 5 seconds
    const interval = setInterval(() => {
      setActiveTab(prev => {
        if (prev === "slide1") return "slide2";
        if (prev === "slide2") return "slide3";
        return "slide1";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: "slide1",
      image: "/lovable-uploads/f73dbaee-92bb-4652-bb6d-6ac1e9f0f309.png",
      title: !isLoading && nearestCity ? 
        `Discover Authentic Indian Cuisine near ${nearestCity}` : 
        "Discover Authentic Indian Cuisine",
      description: "Your gateway to the vibrant flavors and rich traditions of India - from restaurant-quality meals to authentic grocery ingredients."
    },
    {
      id: "slide2",
      image: "/lovable-uploads/76a61805-3fb6-4aa7-8b4b-fabfabe7a622.png",
      title: "Experience the Richness of Indian Spices",
      description: "Explore our curated selection of authentic spices that bring the true essence of Indian cooking to your kitchen."
    },
    {
      id: "slide3",
      image: "/lovable-uploads/cbe59b8d-52d8-4749-99f3-15b12bb0b967.png",
      title: "From Street Food to Gourmet Delights",
      description: "Journey through India's diverse culinary landscape with our restaurant partners and grocery selections."
    }
  ];

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full h-full"
      >
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <TabsList className="bg-black/20 backdrop-blur-sm">
            {slides.map(slide => (
              <TabsTrigger 
                key={slide.id} 
                value={slide.id}
                className="data-[state=active]:bg-white data-[state=active]:text-cocinaRed"
              />
            ))}
          </TabsList>
        </div>

        {slides.map(slide => (
          <TabsContent 
            key={slide.id} 
            value={slide.id} 
            className="h-full m-0 animate-fade-in"
          >
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 transform scale-105" 
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.5)",
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-cocinaRed/70 to-cocinaOrange/70 z-10" />
              
              <div className="container mx-auto relative z-20 h-full flex items-center px-4">
                <div className="max-w-3xl text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
                    {slide.description}
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
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default HeroSection;
