import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Fruits & Vegetables",
    description:
      "We are offering fresh and hygienic fruits and vegetables. Fruits and vegetables contain important vitamins, minerals & plant chemicals…",
    image: "/p-1.png",
  },
  {
    title: "Spices Products",
    description:
      "A spice is a seed, fruit, root, bark, or other plant substance primarily used for flavoring or coloring food. Spices are distinguished from herbs…",
    image: "/p-2.png",
  },
  {
    title: "Grocery Products",
    description:
      "We are here to provide variety of grocery products to our valuable customer like dal, flours and pulses as per their requirements…",
    image: "/p-3.png",
  },
  {
    title: "Namekeen & Frozen",
    description:
      "Indian salted Namkeen have earned the flavour of global customers due to their unique mix of sweet, salty, tangy and spicy flavours…",
    image: "/p-4.png",
  },
  {
    title: "Handicraft Products",
    description:
      "A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where…",
    image: "/p-5.png",
  },
  {
    title: "Copper Products",
    description:
      "Copper is an imperative nutrient for body. It helps the body to form red blood cells, maintain healthy bones, blood vessels, nerves, immune function…",
    image: "/p-6.png",
  },
  {
    title: "Imitation Jewellery",
    description:
      "Artificial Jewellery, also known as costume jewellery, imitation jewellery or fashion jewellery is loved by one and all for its beauty and pocket friendly prices and looks like a real jewellery.",
    image: "/p-7.png",
  },
  {
    title: "Furniture",
    description:
      "If you're facing an empty house or a big remodel, you've got big choices to make. Before you decide how to fill your home, learn about the options you have the types of furnitures.",
    image: "/p-8.png",
  },
  {
    title: "Leather Products",
    description:
      "Leather products are highly coveted for their classy look and feel. Be its shoes, bags or jackets, pure leather products can always be set apart from the synthetics and the faux leather.",
    image: "/p-9.png",
  },
  {
    title: "Garment Products",
    description:
      "Garments could be classified based on several aspects as there is no standard classification system available. However, the garments could be…",
    image: "/p-10.png",
  },
  {
    title: "Ceramic & Stone",
    description:
      "Ceramics are classified as inorganic and nonmetallic materials that are essential to our daily lifestyle. Ceramic and materials engineers are the…",
    image: "/p-11.png",
  },  
  {
    title: "Packaging Products",
    description:
      "najmcommercial packaging Products are known for their quality, durability and the precision they come with. As a quality…",
    image: "/p-12.png",
  },
]

export default function ExportProducts() {
  return (
    <section id="exports" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance">What We Export</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our wide range of premium quality products that we export to markets worldwide. Each category
            represents our commitment to excellence and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
                <CardTitle className="text-base sm:text-lg text-balance leading-tight">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 text-pretty line-clamp-3 leading-relaxed">
                  {product.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 text-sm">
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" className="w-full sm:w-auto">
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
