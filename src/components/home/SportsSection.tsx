import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sports = [
  {
    name: "Football",
    injuries: "ACL, Ankle Sprains, Hamstring",
    image: "🏈",
    athletes: "2.5K",
  },
  {
    name: "Basketball",
    injuries: "Knee, Ankle, Wrist Injuries",
    image: "🏀",
    athletes: "1.8K",
  },
  {
    name: "Tennis",
    injuries: "Tennis Elbow, Shoulder, Wrist",
    image: "🎾",
    athletes: "1.2K",
  },
  {
    name: "Soccer",
    injuries: "Knee, Groin, Ankle Injuries",
    image: "⚽",
    athletes: "3.2K",
  },
  {
    name: "Cricket",
    injuries: "Back, Shoulder, Hamstring",
    image: "🏏",
    athletes: "2.1K",
  },
  {
    name: "Swimming",
    injuries: "Shoulder, Back, Knee",
    image: "🏊",
    athletes: "900",
  },
];

export function SportsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Recovery by <span className="text-gradient-primary">Sport</span>
            </h2>
            <p className="text-muted-foreground">
              Select your sport to find targeted recovery programs
            </p>
          </div>
          <Link to="/recovery">
            <Button variant="outline">
              View All Sports
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sports.map((sport) => (
            <Link
              key={sport.name}
              to={`/recovery?sport=${sport.name.toLowerCase()}`}
              className="group bg-gradient-card rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {sport.image}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {sport.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                {sport.injuries}
              </p>
              <span className="text-xs text-primary font-medium">
                {sport.athletes} athletes
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
