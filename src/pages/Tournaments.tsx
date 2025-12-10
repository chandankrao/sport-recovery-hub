import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users, Trophy, Clock } from "lucide-react";
import { useState } from "react";

const tournaments = [
  {
    id: 1,
    name: "City Football Championship",
    sport: "Football",
    location: "Central Stadium, New York",
    date: "Jan 15, 2025",
    registrationDeadline: "Jan 10, 2025",
    participants: 16,
    maxTeams: 32,
    prizePool: "$10,000",
    level: "Amateur",
    status: "Open",
    emoji: "🏈",
  },
  {
    id: 2,
    name: "Regional Basketball League",
    sport: "Basketball",
    location: "Sports Complex, Los Angeles",
    date: "Jan 20-22, 2025",
    registrationDeadline: "Jan 15, 2025",
    participants: 24,
    maxTeams: 24,
    prizePool: "$5,000",
    level: "Semi-Pro",
    status: "Full",
    emoji: "🏀",
  },
  {
    id: 3,
    name: "Open Tennis Tournament",
    sport: "Tennis",
    location: "Tennis Club, Miami",
    date: "Feb 1-3, 2025",
    registrationDeadline: "Jan 25, 2025",
    participants: 48,
    maxTeams: 64,
    prizePool: "$3,000",
    level: "All Levels",
    status: "Open",
    emoji: "🎾",
  },
  {
    id: 4,
    name: "Youth Soccer Cup",
    sport: "Soccer",
    location: "Community Fields, Chicago",
    date: "Feb 10, 2025",
    registrationDeadline: "Feb 5, 2025",
    participants: 8,
    maxTeams: 16,
    prizePool: "Trophies",
    level: "Youth (U-18)",
    status: "Open",
    emoji: "⚽",
  },
  {
    id: 5,
    name: "Masters Swimming Meet",
    sport: "Swimming",
    location: "Aquatic Center, Boston",
    date: "Feb 15, 2025",
    registrationDeadline: "Feb 10, 2025",
    participants: 75,
    maxTeams: 100,
    prizePool: "$2,000",
    level: "Masters (30+)",
    status: "Open",
    emoji: "🏊",
  },
  {
    id: 6,
    name: "Cricket Premier League",
    sport: "Cricket",
    location: "Cricket Ground, Houston",
    date: "Mar 1-15, 2025",
    registrationDeadline: "Feb 20, 2025",
    participants: 6,
    maxTeams: 8,
    prizePool: "$15,000",
    level: "Professional",
    status: "Open",
    emoji: "🏏",
  },
];

export default function Tournaments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");

  const sports = ["All", "Football", "Basketball", "Tennis", "Soccer", "Swimming", "Cricket"];

  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch =
      tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.sport.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === "All" || tournament.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Local <span className="text-gradient-primary">Tournaments</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover and register for sports tournaments and competitions in your area.
              Stay updated with the latest events.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search tournaments by name, sport, or location..."
                className="pl-10 bg-card border-border h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {sports.map((sport) => (
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

          {/* Tournaments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="group bg-gradient-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                {/* Header */}
                <div className="p-5 border-b border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{tournament.emoji}</span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tournament.name}
                        </h3>
                        <p className="text-sm text-primary">{tournament.sport}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        tournament.status === "Open"
                          ? "bg-success/20 text-success"
                          : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {tournament.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {tournament.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    {tournament.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    Registration: {tournament.registrationDeadline}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {tournament.participants}/{tournament.maxTeams} teams registered
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground block">Prize Pool</span>
                      <span className="font-display text-lg font-bold text-foreground">
                        {tournament.prizePool}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded">
                      {tournament.level}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 pb-5">
                  <Button
                    className="w-full"
                    disabled={tournament.status === "Full"}
                    variant={tournament.status === "Full" ? "secondary" : "default"}
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    {tournament.status === "Full" ? "Registration Closed" : "Register Now"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredTournaments.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No tournaments found. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
