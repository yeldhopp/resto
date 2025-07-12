import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Thani Naadan - Kerala Hotel",
    cuisine: "Authentic Kerala",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Mayur Vihar, Delhi",
    popular: "Fish Curry & Rice",
    distance: "2.5 km"
  },
  {
    id: 2,
    name: "Kerala Kitchen",
    cuisine: "Traditional Kerala",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Connaught Place, Delhi",
    popular: "Sadya Meals",
    distance: "8.2 km"
  },
  {
    id: 3,
    name: "Malabar Coast",
    cuisine: "Kerala Seafood",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Karol Bagh, Delhi",
    popular: "Karimeen Fry",
    distance: "5.8 km"
  },
  {
    id: 4,
    name: "Coconut Grove",
    cuisine: "Kerala Vegetarian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Lajpat Nagar, Delhi",
    popular: "Appam & Stew",
    distance: "6.3 km"
  },
  {
    id: 5,
    name: "Backwater Delights",
    cuisine: "Kerala Homestyle",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Rohini, Delhi",
    popular: "Puttu & Kadala",
    distance: "12.1 km"
  },
  {
    id: 6,
    name: "Spice Route Kerala",
    cuisine: "Kerala Fusion",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Dwarka, Delhi",
    popular: "Kerala Biryani",
    distance: "15.7 km"
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
    name: "Cardamom Hills Spice Box",
    category: "Authentic Spices",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "500g",
    price: "₹850"
  },
  {
    id: 3,
    name: "Pure Coconut Oil",
    category: "Traditional Oils",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "1 liter",
    price: "₹320"
  },
  {
    id: 4,
    name: "Kerala Black Pepper",
    category: "Premium Spices",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "250g",
    price: "₹280"
  },
  {
    id: 5,
    name: "Coconut Milk Powder",
    category: "Cooking Essentials",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "200g",
    price: "₹180"
  },
  {
    id: 6,
    name: "Kerala Curry Leaves",
    category: "Fresh Herbs",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    weight: "50g",
    price: "₹45"
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Featured Near You</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Discover authentic Kerala restaurants and premium spices in Delhi and nearby areas
        </p>
        
        <Tabs defaultValue="restaurants" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="restaurants">Kerala Restaurants</TabsTrigger>
            <TabsTrigger value="groceries">Spices & Ingredients</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                      <Star className="h-4 w-4 text-keralaGold fill-keralaGold mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-keralaGreen text-white rounded-full px-2 py-1 text-xs font-medium">
                      {restaurant.distance}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{restaurant.name}</h3>
                      <Badge className="bg-keralaGold text-white text-xs">{restaurant.cuisine}</Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{restaurant.location}</span>
                    </div>
                    <p className="mb-4 text-sm">
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
            <div className="text-center mt-8">
              <Button variant="outline" className="border-keralaGreen text-keralaGreen hover:bg-keralaGreen hover:text-white">
                <a href="https://restaurants.naadanresto.com" className="w-full">
                  View All Restaurants
                </a>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="groceries" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groceries.map((grocery) => (
                <Card key={grocery.id} className="overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img
                      src={grocery.image}
                      alt={grocery.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                      <Star className="h-4 w-4 text-keralaGold fill-keralaGold mr-1" />
                      <span className="font-medium">{grocery.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{grocery.name}</h3>
                      <Badge className="bg-keralaSpice text-white text-xs">{grocery.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-1 text-sm">{grocery.weight}</p>
                    <p className="mb-4 font-bold text-lg text-keralaGreen">{grocery.price}</p>
                    <Button className="w-full bg-keralaGold hover:bg-keralaGold/90">
                      <a href="https://spices.naadanresto.com" className="w-full">
                        Add to Cart
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-keralaGold text-keralaGold hover:bg-keralaGold hover:text-white">
                <a href="https://spices.naadanresto.com" className="w-full">
                  Shop All Products
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedSection;