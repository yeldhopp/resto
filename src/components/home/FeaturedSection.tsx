
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Malabar Kitchen",
    cuisine: "Traditional Kerala",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Mumbai",
    popular: "Fish Curry"
  },
  {
    id: 2,
    name: "Coconut Grove",
    cuisine: "Kerala Vegetarian",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Bangalore",
    popular: "Sadya Meals"
  },
  {
    id: 3,
    name: "Backwater Delights",
    cuisine: "Seafood Specialist",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Dubai",
    popular: "Karimeen Fry"
  }
];

const groceries = [
  {
    id: 1,
    name: "Kerala Red Rice",
    category: "Traditional Grains",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "5 kg",
    price: "₹450"
  },
  {
    id: 2,
    name: "Kerala Spice Box",
    category: "Authentic Spices",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "500g",
    price: "₹850"
  },
  {
    id: 3,
    name: "Fresh Coconut Oil",
    category: "Traditional Oils",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "1 liter",
    price: "₹320"
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Featured Selections</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Discover our most popular restaurants and grocery products
        </p>
        
        <Tabs defaultValue="restaurants" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="groceries">Spices & Ingredients</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                      <Star className="h-4 w-4 text-cocinaYellow fill-cocinaYellow mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{restaurant.name}</h3>
                      <Badge className="bg-keralaGold text-white">{restaurant.cuisine}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-1">{restaurant.location}</p>
                    <p className="mb-4">
                      <span className="font-medium">Popular:</span> {restaurant.popular}
                    </p>
                    <Button className="w-full bg-keralaGreen hover:bg-keralaGreen/90">
                      <a href="https://restaurants.naadanresto.com" className="w-full">
                        Order Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="groceries" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groceries.map((grocery) => (
                <Card key={grocery.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={grocery.image}
                      alt={grocery.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                      <Star className="h-4 w-4 text-cocinaYellow fill-cocinaYellow mr-1" />
                      <span className="font-medium">{grocery.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{grocery.name}</h3>
                      <Badge className="bg-keralaSpice text-white">{grocery.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-1">{grocery.weight}</p>
                    <p className="mb-4 font-bold text-lg">{grocery.price}</p>
                    <Button className="w-full bg-keralaGold hover:bg-keralaGold/90">
                      <a href="https://spices.naadanresto.com" className="w-full">
                        Add to Cart
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedSection;
