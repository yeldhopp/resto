import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const KeralaCulture = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-keralaGreen">Kerala Culinary Heritage</h1>
          
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
              Kerala cuisine, known as the culinary jewel of South India, represents a unique blend of indigenous traditions, coastal influences, and spice trade heritage. From the elaborate sadya feast to the aromatic fish curries, Kerala's food culture reflects the state's rich history, diverse geography, and cultural sophistication.
            </p>
            
            <Tabs defaultValue="history" className="w-full mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="history">Heritage</TabsTrigger>
                <TabsTrigger value="regions">Regional Specialties</TabsTrigger>
                <TabsTrigger value="spices">Spices & Health</TabsTrigger>
              </TabsList>
              
              <TabsContent value="history" className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-keralaGold">The Heritage of Kerala Cuisine</h2>
                <Separator className="mb-6 bg-keralaGold/30" />
                
                <p className="mb-4">
                  Kerala's culinary traditions span over 2,000 years, shaped by its position as a major spice trading hub and cultural crossroads:
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Ancient Spice Trade (1st Century CE)</h3>
                <p className="mb-4">
                  Kerala's location on the Malabar Coast made it the epicenter of the global spice trade. Ancient Romans, Arabs, and Chinese traders came seeking black pepper, cardamom, and cinnamon, establishing Kerala as the "Spice Garden of India."
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Cultural Influences (8th-16th Century)</h3>
                <p className="mb-4">
                  The arrival of various communities - Jewish, Christian, and Muslim traders - brought new cooking techniques and ingredients. The Syrian Christian community, in particular, contributed significantly to Kerala's non-vegetarian cuisine traditions.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Colonial Period (16th-20th Century)</h3>
                <p className="mb-4">
                  Portuguese, Dutch, and British influences introduced new ingredients like tomatoes, potatoes, and cashews. However, Kerala cuisine maintained its distinct identity, adapting foreign elements to local tastes and traditions.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Modern Kerala Cuisine</h3>
                <p>
                  Today's Kerala cuisine represents a perfect synthesis of ancient traditions and modern adaptations. The emphasis on fresh ingredients, coconut-based preparations, and aromatic spices continues to define authentic Kerala cooking worldwide.
                </p>
              </TabsContent>
              
              <TabsContent value="regions" className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-keralaGold">Regional Specialties of Kerala</h2>
                <Separator className="mb-6 bg-keralaGold/30" />
                
                <p className="mb-6">
                  Kerala's diverse geography - from coastal areas to hill stations - has created distinct regional culinary traditions:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Malabar Cuisine (North Kerala)</h3>
                      <p className="mb-3">
                        Known for its Mappila (Muslim) influences, featuring biryanis, pathiri (rice bread), and rich meat preparations. The region is famous for its unique spice blends and dum cooking techniques.
                      </p>
                      <p className="font-medium">Signature dishes: Malabar Biryani, Kozhikode Halwa, Pathiri</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Central Kerala Cuisine</h3>
                      <p className="mb-3">
                        The heartland of traditional Kerala cooking, featuring elaborate sadya meals, coconut-based curries, and traditional breakfast items. Home to the most authentic Kerala vegetarian traditions.
                      </p>
                      <p className="font-medium">Signature dishes: Sadya, Appam, Puttu, Avial</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Travancore Cuisine (South Kerala)</h3>
                      <p className="mb-3">
                        Influenced by royal culinary traditions, featuring sophisticated preparations and unique combinations. Known for its elaborate feast preparations and innovative vegetarian dishes.
                      </p>
                      <p className="font-medium">Signature dishes: Karimeen Curry, Ela Ada, Thiruvathira Puzhukku</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Coastal Kerala</h3>
                      <p className="mb-3">
                        Dominated by seafood preparations, coconut-based curries, and fishing community traditions. Features the freshest fish and shellfish preparations with distinctive coastal spicing.
                      </p>
                      <p className="font-medium">Signature dishes: Fish Molee, Prawn Curry, Meen Pollichathu</p>
                    </CardContent>
                  </Card>
                </div>
                
                <p>
                  Each region's cuisine reflects its unique history, available ingredients, and cultural influences, creating a rich tapestry of flavors that defines Kerala's culinary landscape.
                </p>
              </TabsContent>
              
              <TabsContent value="spices" className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-keralaGold">Kerala Spices & Their Health Benefits</h2>
                <Separator className="mb-6 bg-keralaGold/30" />
                
                <p className="mb-6">
                  Kerala is renowned as the "Spice Garden of India," producing some of the world's finest spices with exceptional medicinal and culinary properties:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-l-4 border-l-keralaGreen">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Black Pepper</h3>
                      <p className="mb-3">
                        Known as the "King of Spices," Kerala's black pepper is prized worldwide for its pungency and aroma.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Benefits: Digestive aid, antioxidant properties, respiratory health, metabolism boost
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-keralaGold">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Cardamom</h3>
                      <p className="mb-3">
                        Kerala produces the finest quality cardamom, known as the "Queen of Spices" for its delicate flavor and aroma.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Benefits: Digestive health, oral hygiene, blood pressure regulation, detoxification
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-keralaSpice">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Cinnamon</h3>
                      <p className="mb-3">
                        Kerala's cinnamon is known for its sweet, delicate flavor and superior quality compared to cassia.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Benefits: Blood sugar control, anti-inflammatory, heart health, cognitive function
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-keralaRed">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Cloves</h3>
                      <p className="mb-3">
                        Kerala cloves are highly aromatic and potent, used both in cooking and traditional medicine.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Benefits: Dental health, antimicrobial properties, digestive aid, pain relief
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-keralaGreen">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Nutmeg</h3>
                      <p className="mb-3">
                        Kerala nutmeg is prized for its intense aroma and is used sparingly in both sweet and savory dishes.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Benefits: Sleep aid, digestive health, brain function, pain relief
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-keralaGold">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Star Anise</h3>
                      <p className="mb-3">
                        Used in Kerala's spice blends, star anise adds a distinctive licorice-like flavor to dishes.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Benefits: Respiratory health, antiviral properties, digestive aid, antioxidant effects
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="mb-4">
                  Kerala's unique climate and soil conditions create spices with exceptional potency and flavor profiles. The traditional knowledge of spice cultivation and processing has been passed down through generations, ensuring the highest quality standards.
                </p>
                
                <p>
                  Modern research continues to validate the health benefits of Kerala spices, making them not just flavorful additions to food but also valuable contributors to wellness and traditional medicine practices.
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="bg-muted p-8 rounded-lg text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Experience Authentic Kerala Cuisine</h2>
              <p className="mb-6">
                At Kerala Restaurant, we're passionate about preserving and sharing the rich culinary heritage of God's Own Country. Explore our network of authentic restaurants and spice suppliers to embark on your Kerala culinary journey.
              </p>
              <div className="flex justify-center flex-col sm:flex-row gap-4">
                <a 
                  href="https://restaurants.naadanresto.com" 
                  className="px-6 py-3 bg-keralaGreen text-white rounded-md hover:bg-keralaGreen/90 transition-colors"
                >
                  Find Kerala Restaurants
                </a>
                <a 
                  href="https://spices.naadanresto.com" 
                  className="px-6 py-3 bg-keralaGold text-white rounded-md hover:bg-keralaGold/90 transition-colors"
                >
                  Buy Authentic Spices
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KeralaCulture;