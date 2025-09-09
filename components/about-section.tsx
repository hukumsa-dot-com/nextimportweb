import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: TrendingUp, label: "Growth Rate", value: "25%" },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Our Company</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              With over 15 years of experience in international trade, we have established ourselves as a trusted
              partner for businesses worldwide. Our commitment to quality, reliability, and customer satisfaction has
              made us a leader in the import-export industry.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              We specialize in exporting premium quality products including fresh fruits and vegetables, authentic
              spices, traditional handicrafts, and much more. Our extensive network spans across 50+ countries, ensuring
              that we can meet your global trade requirements efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Learn More About Us</Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>

          <div className="relative">
            <img src="/mainlogo.jpg" alt="About our company" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
