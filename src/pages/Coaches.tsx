import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, MapPin, Video, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

const coaches = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Sports Physiotherapy",
    sports: ["Football", "Basketball"],
    rating: 4.9,
    reviews: 156,
    location: "New York, USA",
    experience: "12 years",
    sessions: "500+",
    virtual: true,
    offline: true,
    verified: true,
    avatar: "👩‍⚕️",
    hourlyRate: 80,
  },
  {
    id: 2,
    name: "Coach James Wilson",
    specialty: "Strength & Conditioning",
    sports: ["Soccer", "Tennis"],
    rating: 4.8,
    reviews: 98,
    location: "Los Angeles, USA",
    experience: "8 years",
    sessions: "350+",
    virtual: true,
    offline: false,
    verified: true,
    avatar: "👨‍🏫",
    hourlyRate: 65,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    specialty: "ACL Rehabilitation",
    sports: ["Football", "Soccer", "Basketball"],
    rating: 4.9,
    reviews: 203,
    location: "Chicago, USA",
    experience: "15 years",
    sessions: "800+",
    virtual: true,
    offline: true,
    verified: true,
    avatar: "👩‍⚕️",
    hourlyRate: 95,
  },
  {
    id: 4,
    name: "Coach Michael Torres",
    specialty: "Performance Training",
    sports: ["Swimming", "Track & Field"],
    rating: 4.7,
    reviews: 67,
    location: "Miami, USA",
    experience: "10 years",
    sessions: "400+",
    virtual: true,
    offline: true,
    verified: false,
    avatar: "👨‍🏫",
    hourlyRate: 55,
  },
  {
    id: 5,
    name: "Dr. Amanda Foster",
    specialty: "Sports Medicine",
    sports: ["Tennis", "Golf"],
    rating: 4.8,
    reviews: 112,
    location: "Boston, USA",
    experience: "11 years",
    sessions: "600+",
    virtual: false,
    offline: true,
    verified: true,
    avatar: "👩‍⚕️",
    hourlyRate: 85,
  },
  {
    id: 6,
    name: "Coach David Park",
    specialty: "Injury Prevention",
    sports: ["Cricket", "Baseball"],
    rating: 4.6,
    reviews: 45,
    location: "San Francisco, USA",
    experience: "6 years",
    sessions: "200+",
    virtual: true,
    offline: false,
    verified: true,
    avatar: "👨‍🏫",
    hourlyRate: 50,
  },
];

export default function Coaches() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVirtual, setFilterVirtual] = useState(false);

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.sports.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesVirtual = !filterVirtual || coach.virtual;
    return matchesSearch && matchesVirtual;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Expert <span className="text-gradient-primary">Coaches</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with certified physiotherapists and sports coaches for personalized
              guidance and faster recovery.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty, or sport..."
                className="pl-10 bg-card border-border h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant={filterVirtual ? "default" : "secondary"}
              onClick={() => setFilterVirtual(!filterVirtual)}
              className="h-12"
            >
              <Video className="w-4 h-4 mr-2" />
              Virtual Only
            </Button>
          </div>

          {/* Coaches Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCoaches.map((coach) => (
              <div
                key={coach.id}
                className="group bg-gradient-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center text-4xl shrink-0">
                    {coach.avatar}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-foreground truncate">
                          {coach.name}
                        </h3>
                        {coach.verified && (
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-warning shrink-0">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{coach.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({coach.reviews})
                        </span>
                      </div>
                    </div>

                    <p className="text-primary text-sm font-medium mb-2">
                      {coach.specialty}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {coach.sports.map((sport) => (
                        <span
                          key={sport}
                          className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {sport}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {coach.location}
                      </span>
                      <span>{coach.experience} exp</span>
                      <span>{coach.sessions} sessions</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {coach.virtual && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            <Video className="w-3 h-3" />
                            Virtual
                          </span>
                        )}
                        {coach.offline && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-success/10 text-success text-xs rounded">
                            <MapPin className="w-3 h-3" />
                            In-Person
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-foreground">
                          ${coach.hourlyRate}
                        </span>
                        <span className="text-xs text-muted-foreground">/hr</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCoaches.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No coaches found. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
