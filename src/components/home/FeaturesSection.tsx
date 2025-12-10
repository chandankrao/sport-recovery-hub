import { Activity, Heart, Users, Calendar, Target, Video } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Injury Recovery",
    description:
      "Personalized recovery plans based on your sport and injury type with video-guided exercises.",
    color: "primary",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description:
      "Access hundreds of expert-created workout and rehabilitation videos for every injury type.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    description:
      "Connect with certified physiotherapists and coaches for virtual or in-person sessions.",
    color: "success",
  },
  {
    icon: Calendar,
    title: "Tournament Finder",
    description:
      "Stay updated on local tournaments and events in your area tailored to your sport.",
    color: "info",
  },
  {
    icon: Target,
    title: "Sport Recommendations",
    description:
      "Get personalized sport suggestions based on your body metrics and physical attributes.",
    color: "warning",
  },
  {
    icon: Activity,
    title: "Progress Tracking",
    description:
      "Monitor your recovery journey with detailed analytics and milestone tracking.",
    color: "primary",
  },
];

const colorMap = {
  primary: "bg-primary/20 text-primary",
  accent: "bg-accent/20 text-accent",
  success: "bg-success/20 text-success",
  info: "bg-info/20 text-info",
  warning: "bg-warning/20 text-warning",
};

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Recover & Excel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From injury recovery to finding your next coach or tournament, we've
            got you covered with comprehensive tools and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${
                  colorMap[feature.color as keyof typeof colorMap]
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
