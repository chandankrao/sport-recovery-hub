import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Clock, Star, Filter } from "lucide-react";
import { useState } from "react";

const recoveryPrograms = [
  {
    id: 1,
    title: "ACL Recovery Program",
    sport: "Football",
    injury: "ACL Tear",
    duration: "12 weeks",
    videos: 24,
    rating: 4.8,
    level: "Intermediate",
    thumbnail: "🏈",
  },
  {
    id: 2,
    title: "Tennis Elbow Rehabilitation",
    sport: "Tennis",
    injury: "Tennis Elbow",
    duration: "6 weeks",
    videos: 18,
    rating: 4.9,
    level: "Beginner",
    thumbnail: "🎾",
  },
  {
    id: 3,
    title: "Ankle Sprain Recovery",
    sport: "Basketball",
    injury: "Ankle Sprain",
    duration: "4 weeks",
    videos: 12,
    rating: 4.7,
    level: "Beginner",
    thumbnail: "🏀",
  },
  {
    id: 4,
    title: "Shoulder Injury Protocol",
    sport: "Swimming",
    injury: "Rotator Cuff",
    duration: "8 weeks",
    videos: 20,
    rating: 4.6,
    level: "Advanced",
    thumbnail: "🏊",
  },
  {
    id: 5,
    title: "Hamstring Strain Recovery",
    sport: "Soccer",
    injury: "Hamstring Pull",
    duration: "5 weeks",
    videos: 15,
    rating: 4.8,
    level: "Intermediate",
    thumbnail: "⚽",
  },
  {
    id: 6,
    title: "Lower Back Pain Relief",
    sport: "Cricket",
    injury: "Lower Back",
    duration: "6 weeks",
    videos: 16,
    rating: 4.5,
    level: "Beginner",
    thumbnail: "🏏",
  },
];

const sports = ["All", "Football", "Basketball", "Tennis", "Soccer", "Swimming", "Cricket"];
const injuries = ["All", "ACL", "Ankle", "Shoulder", "Elbow", "Back", "Hamstring"];

export default function Recovery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedInjury, setSelectedInjury] = useState("All");

  const filteredPrograms = recoveryPrograms.filter((program) => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.injury.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === "All" || program.sport === selectedSport;
    const matchesInjury = selectedInjury === "All" || program.injury.toLowerCase().includes(selectedInjury.toLowerCase());
    return matchesSearch && matchesSport && matchesInjury;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Injury <span className="text-gradient-primary">Recovery Programs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse our comprehensive library of video-guided recovery programs designed by
              certified physiotherapists and sports medicine experts.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search programs by sport, injury, or name..."
                className="pl-10 bg-card border-border h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sport:</span>
                {sports.slice(0, 4).map((sport) => (
                  <Button
                    key={sport}
                    variant={selectedSport === sport ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedSport(sport)}
                  >
                    {sport}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="group bg-gradient-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-glow"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-muted flex items-center justify-center">
                  <span className="text-7xl">{program.thumbnail}</span>
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="default" size="lg" className="rounded-full">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                    {program.level}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-primary font-medium">{program.sport}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{program.injury}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {program.videos} videos
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-warning">
                      <Star className="w-4 h-4 fill-current" />
                      {program.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No programs found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
