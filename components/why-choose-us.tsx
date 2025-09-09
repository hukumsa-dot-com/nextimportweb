import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Award, Clock, DollarSign, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Handshake,
    title: "We Build Relations",
    description:
      "Long-term partnerships built on trust, transparency, and mutual success. We believe in growing together with our clients.",
  },
  {
    icon: Award,
    title: "Experience & Professional",
    description:
      "Over 15 years of expertise in international trade with a team of seasoned professionals who understand global markets.",
  },
  {
    icon: Clock,
    title: "High Quality Products",
    description:
      "Rigorous quality control processes ensure that every product meets international standards and exceeds customer expectations.",
  },
  {
    icon: DollarSign,
    title: "We Deliver On Time",
    description:
      "Reliable logistics network and efficient supply chain management guarantee timely delivery to any destination worldwide.",
  },
  {
    icon: Heart,
    title: "Price Benefits",
    description:
      "Competitive pricing without compromising on quality. We offer the best value for money in the international trade market.",
  },
  {
    icon: Users,
    title: "Complete Client Satisfaction",
    description:
      "Our dedicated customer service team ensures 100% client satisfaction through personalized support and after-sales service.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why You Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover what sets us apart in the competitive world of international trade. Our commitment to excellence
            drives everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-balance">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
