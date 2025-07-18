
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart, UtensilsCrossed, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", children: [
      { name: "About Us", path: "/about", description: "Learn more about Cocina India and our mission" },
      { name: "Why Cocina India?", path: "/why-cocina", description: "Discover what makes us different from other services" },
      { name: "Indian Culinary Culture", path: "/culinary-culture", description: "Explore the rich heritage of Indian cuisine" },
    ]},
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo (Left) */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-keralaGreen font-spice">Kerala <span className="text-keralaGold">Restaurant</span></span>
        </Link>
        
        {/* Buttons (Center) - visible on desktop */}
        <div className="hidden md:flex gap-4 mx-auto">
          <Button variant="outline" className="bg-keralaGreen text-white hover:bg-keralaGreen/90 hover:text-white">
            <UtensilsCrossed className="mr-2 h-4 w-4" />
            <a href="https://restaurants.naadanresto.com" target="_blank" rel="noopener noreferrer">
              Restaurants
            </a>
          </Button>
          <Button variant="outline" className="bg-keralaGold text-white hover:bg-keralaGold/90 hover:text-white">
            <ShoppingCart className="mr-2 h-4 w-4" />
            <a href="https://spices.naadanresto.com" target="_blank" rel="noopener noreferrer">
              Kerala Spices
            </a>
          </Button>
        </div>
        
        {/* Desktop Navigation (Right) */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn more about Kerala Restaurant and our mission
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/why-kerala"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Why Kerala Restaurant?</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover what makes us the best for Kerala cuisine
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/kerala-culture"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Kerala Culinary Heritage</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore the rich heritage of Kerala cuisine
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <div className="flex flex-col h-full py-6">
                <div className="px-6 pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                      <span className="text-xl font-bold text-cocinaRed font-spice">Cocina <span className="text-cocinaGreen">India</span></span>
                    </Link>
                  </div>
                </div>
                
                <div className="px-6 py-4 flex-1 overflow-auto">
                  <nav className="flex flex-col space-y-4">
                    <Link to="/" className="py-2 text-lg font-medium">Home</Link>
                    
                    <div>
                      <p className="py-2 text-lg font-medium">Discover</p>
                      <div className="pl-4 flex flex-col space-y-2 mt-2">
                        <Link to="/about" className="py-1 text-base">About Us</Link>
                        <Link to="/why-kerala" className="py-1 text-base">Why Kerala Restaurant?</Link>
                        <Link to="/kerala-culture" className="py-1 text-base">Kerala Culinary Heritage</Link>
                      </div>
                    </div>
                    
                    <Link to="/contact" className="py-2 text-lg font-medium">Contact Us</Link>
                  </nav>
                </div>
                
                <div className="px-6 pt-4 border-t">
                  <div className="flex flex-col gap-3">
                    <Button className="bg-keralaGreen text-white hover:bg-keralaGreen/90 hover:text-white w-full justify-center">
                      <UtensilsCrossed className="mr-2 h-5 w-5" />
                      <a href="https://restaurants.naadanresto.com" target="_blank" rel="noopener noreferrer" className="w-full">
                        Restaurants
                      </a>
                    </Button>
                    <Button className="bg-keralaGold text-white hover:bg-keralaGold/90 hover:text-white w-full justify-center">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      <a href="https://spices.naadanresto.com" target="_blank" rel="noopener noreferrer" className="w-full">
                        Kerala Spices
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
