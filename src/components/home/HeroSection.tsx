
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
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: !isLoading && nearestCity ? 
        `Authentic Kerala Cuisine near ${nearestCity}` : 
        "Authentic Kerala Cuisine Worldwide",
      description: "Experience the rich flavors of God's Own Country - from traditional sadya to aromatic spices, connecting Kerala restaurants globally."
    },
    {
      id: "slide2",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80",
      title: "Traditional Kerala Spices & Ingredients",
      description: "From cardamom hills to coconut groves - discover authentic Kerala spices and ingredients delivered fresh to your doorstep."
    },
    {
      id: "slide3",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Kerala Restaurants Across the Globe",
      description: "Connecting Kerala food lovers worldwide with authentic restaurants serving traditional recipes from God's Own Country."
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
                className="data-[state=active]:bg-white data-[state=active]:text-cocinaGreen"
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
                  backgroundPosition: "center 30%",
                  filter: "brightness(0.7)",
                }}
              />
              
              {/* Changed overlay from red to green-yellow gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-keralaGreen/60 to-keralaGold/60 z-10" />
              
              <div className="container mx-auto relative z-20 h-full flex items-center px-4">
                <div className="max-w-3xl text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                    <Button size="lg" className="bg-white text-keralaGreen hover:bg-white/90 text-lg px-8 py-6">
                      <UtensilsCrossed className="mr-2 h-5 w-5" />
                      <a href="https://restaurants.naadanresto.com" className="font-medium">
                        Find Restaurants
                      </a>
                    </Button>
                    <Button size="lg" className="bg-keralaGold text-keralaBrown hover:bg-keralaGold/90 text-lg px-8 py-6">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      <a href="https://spices.naadanresto.com" className="font-medium">
                        Buy Spices
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
