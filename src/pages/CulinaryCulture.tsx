
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const CulinaryCulture = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cocinaRed">Indian Culinary Culture</h1>
          
          <div 
            className="w-full h-64 rounded-lg overflow-hidden mb-8"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-8">
              Indian cuisine is one of the world's most diverse and flavorful culinary traditions, shaped by centuries of history, cultural exchanges, and regional influences. From the robust flavors of North India to the coconut-infused dishes of the South, Indian food offers a rich tapestry of tastes, aromas, and cooking techniques.
            </p>
            
            <Tabs defaultValue="history" className="w-full mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="regions">Regional Cuisine</TabsTrigger>
                <TabsTrigger value="spices">Health Benefits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="history" className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-cocinaOrange">The History of Indian Cuisine</h2>
                <Separator className="mb-6 bg-cocinaOrange/30" />
                
                <p className="mb-4">
                  Indian culinary traditions date back over 5,000 years, evolving through various cultural influences and historical events:
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Ancient Origins (3000 BCE - 1500 BCE)</h3>
                <p className="mb-4">
                  The foundations of Indian cuisine were laid during the Indus Valley Civilization, with evidence of dishes made from wheat, barley, and various pulses. Archaeological findings reveal early use of spices like turmeric and ginger.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Vedic Period (1500 BCE - 500 BCE)</h3>
                <p className="mb-4">
                  This era saw the development of a sophisticated food culture, with categorization of foods based on taste, texture, and medicinal properties. The concept of balancing flavors and nutritional aspects emerged during this period.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Medieval Influences (1000 CE - 1700 CE)</h3>
                <p className="mb-4">
                  The medieval period brought significant innovations to Indian cuisine through Mughal influences. Rich gravies, aromatic rice dishes like biryani, and the art of slow cooking developed during this time, particularly in North India.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Colonial Era (1700 CE - 1947)</h3>
                <p className="mb-4">
                  The British, Portuguese, and French colonial presence introduced new ingredients and cooking methods. Potatoes, tomatoes, and chilies—now staples in Indian cooking—were introduced during this period.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Modern Indian Cuisine</h3>
                <p>
                  Today's Indian cuisine represents a blend of traditional methods with modern innovations. Regional specialties are celebrated while fusion approaches create new culinary experiences, making Indian food one of the most popular and adaptable cuisines worldwide.
                </p>
              </TabsContent>
              
              <TabsContent value="regions" className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-cocinaOrange">Regional Cuisines of India</h2>
                <Separator className="mb-6 bg-cocinaOrange/30" />
                
                <p className="mb-6">
                  India's vast geographical diversity has given rise to distinct regional cuisines, each with its own ingredients, techniques, and flavor profiles:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">North Indian Cuisine</h3>
                      <p className="mb-3">
                        Known for its rich gravies, tandoor-cooked breads, and dairy-based dishes. Common ingredients include wheat, paneer (cheese), and a variety of garam masalas (spice blends).
                      </p>
                      <p className="font-medium">Signature dishes: Butter Chicken, Rogan Josh, Naan bread</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">South Indian Cuisine</h3>
                      <p className="mb-3">
                        Characterized by rice-based dishes, coconut, and tamarind. Features lighter, often vegetarian preparations with distinctive spicing techniques.
                      </p>
                      <p className="font-medium">Signature dishes: Dosa, Idli, Sambar, Rasam</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">East Indian Cuisine</h3>
                      <p className="mb-3">
                        Features seafood, mustard oil, and rice. Bengali cuisine is known for its delicate flavors and sweet-savory balance.
                      </p>
                      <p className="font-medium">Signature dishes: Fish Curry, Rasgulla, Mishti Doi</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">West Indian Cuisine</h3>
                      <p className="mb-3">
                        Includes Gujarati, Maharashtrian, and Goan cuisines. Ranges from vegetarian dishes with sweet undertones to spicy seafood preparations.
                      </p>
                      <p className="font-medium">Signature dishes: Dhokla, Vindaloo, Pav Bhaji</p>
                    </CardContent>
                  </Card>
                </div>
                
                <p>
                  Each region's cuisine reflects its climate, agricultural capabilities, cultural history, and religious influences, creating a rich mosaic of flavors that continues to evolve while maintaining traditional roots.
                </p>
              </TabsContent>
              
              <TabsContent value="spices" className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-cocinaOrange">Health Benefits of Indian Spices</h2>
                <Separator className="mb-6 bg-cocinaOrange/30" />
                
                <p className="mb-6">
                  Indian cuisine is renowned not only for its flavors but also for the medicinal and health-promoting properties of its spices. Many of these spices have been used in Ayurvedic medicine for thousands of years:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-l-4 border-l-cocinaYellow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Turmeric</h3>
                      <p className="mb-3">
                        Contains curcumin, a powerful anti-inflammatory compound with antioxidant properties.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        May help with: Inflammation, joint pain, digestive issues, immune support
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-cocinaOrange">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Ginger</h3>
                      <p className="mb-3">
                        Contains gingerol, which has powerful medicinal properties.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        May help with: Nausea, digestion, reducing muscle pain, lowering blood sugar
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-cocinaRed">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Cinnamon</h3>
                      <p className="mb-3">
                        Rich in antioxidants and has anti-inflammatory properties.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        May help with: Blood sugar regulation, heart health, cognitive function
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-cocinaGreen">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Cardamom</h3>
                      <p className="mb-3">
                        Contains compounds with antioxidant and diuretic properties.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        May help with: Digestive issues, oral health, blood pressure
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-cocinaOrange">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Cumin</h3>
                      <p className="mb-3">
                        Rich in iron and contains beneficial plant compounds.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        May help with: Digestion, immune system, cholesterol levels
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-cocinaRed">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Fenugreek</h3>
                      <p className="mb-3">
                        Contains compounds that may stimulate insulin production.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        May help with: Blood sugar control, appetite control, digestive health
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="mb-4">
                  The combination of spices in traditional Indian dishes often creates synergistic health effects. For example, the common pairing of turmeric with black pepper enhances curcumin absorption by up to 2,000%.
                </p>
                
                <p>
                  Modern research continues to validate many of the traditional health claims associated with Indian spices, making them not just flavorful additions to food but also valuable contributors to a healthy diet.
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="bg-muted p-8 rounded-lg text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Experience the Richness of Indian Cuisine</h2>
              <p className="mb-6">
                At Cocina India, we're passionate about sharing the diversity and depth of Indian culinary traditions. Explore our restaurant and grocery offerings to embark on your own Indian culinary journey.
              </p>
              <div className="flex justify-center flex-col sm:flex-row gap-4">
                <a 
                  href="https://restaurants.cocinaindia.com" 
                  className="px-6 py-3 bg-cocinaRed text-white rounded-md hover:bg-cocinaRed/90 transition-colors"
                >
                  Discover Our Restaurants
                </a>
                <a 
                  href="https://groceries.cocinaindia.com" 
                  className="px-6 py-3 bg-cocinaOrange text-white rounded-md hover:bg-cocinaOrange/90 transition-colors"
                >
                  Explore Indian Groceries
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CulinaryCulture;
