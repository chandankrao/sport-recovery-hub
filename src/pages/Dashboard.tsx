import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  Target,
  Calendar,
  TrendingUp,
  Play,
  Award,
  Scale,
  Ruler,
  Heart,
  Dumbbell,
} from "lucide-react";
import { useState } from "react";

const recommendedSports = [
  {
    sport: "Basketball",
    match: 92,
    reason: "Your height and agility scores are ideal",
    emoji: "🏀",
  },
  {
    sport: "Swimming",
    match: 88,
    reason: "Great for your body type and endurance",
    emoji: "🏊",
  },
  {
    sport: "Tennis",
    match: 85,
    reason: "Excellent arm reach and reflexes",
    emoji: "🎾",
  },
];

const upcomingActivities = [
  {
    title: "ACL Recovery - Week 3",
    type: "Exercise",
    time: "Today, 10:00 AM",
    duration: "45 min",
  },
  {
    title: "Session with Dr. Mitchell",
    type: "Coaching",
    time: "Tomorrow, 2:00 PM",
    duration: "1 hr",
  },
  {
    title: "City Football Championship",
    type: "Tournament",
    time: "Jan 15, 2025",
    duration: "All day",
  },
];

export default function Dashboard() {
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");
  const [age, setAge] = useState("25");
  const [currentSport, setCurrentSport] = useState("football");

  const bmi = (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome Back, <span className="text-gradient-primary">Athlete</span>
              </h1>
              <p className="text-muted-foreground">
                Track your recovery progress and discover new opportunities
              </p>
            </div>
            <Button variant="accent">
              <Play className="w-4 h-4 mr-2" />
              Continue Recovery
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">Recovery</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">67%</p>
              <Progress value={67} className="h-1 mt-2" />
            </div>
            <div className="bg-gradient-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <span className="text-muted-foreground text-sm">Sessions</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">24</p>
              <p className="text-xs text-success mt-1">+4 this week</p>
            </div>
            <div className="bg-gradient-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <span className="text-muted-foreground text-sm">Days Active</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">18</p>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </div>
            <div className="bg-gradient-card rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-warning" />
                </div>
                <span className="text-muted-foreground text-sm">Achievements</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">7</p>
              <p className="text-xs text-warning mt-1">2 new badges</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Body Metrics */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-card rounded-xl p-6 border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Body Metrics
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="height" className="text-muted-foreground text-sm flex items-center gap-2">
                      <Ruler className="w-4 h-4" />
                      Height (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-1 bg-muted border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="weight" className="text-muted-foreground text-sm flex items-center gap-2">
                      <Scale className="w-4 h-4" />
                      Weight (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-1 bg-muted border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="age" className="text-muted-foreground text-sm flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-1 bg-muted border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sport" className="text-muted-foreground text-sm flex items-center gap-2">
                      <Dumbbell className="w-4 h-4" />
                      Current Sport
                    </Label>
                    <Select value={currentSport} onValueChange={setCurrentSport}>
                      <SelectTrigger className="mt-1 bg-muted border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="football">Football</SelectItem>
                        <SelectItem value="basketball">Basketball</SelectItem>
                        <SelectItem value="tennis">Tennis</SelectItem>
                        <SelectItem value="soccer">Soccer</SelectItem>
                        <SelectItem value="swimming">Swimming</SelectItem>
                        <SelectItem value="cricket">Cricket</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">BMI</span>
                      <span className="font-display text-xl font-bold text-foreground">
                        {bmi}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {parseFloat(bmi) < 18.5
                        ? "Underweight"
                        : parseFloat(bmi) < 25
                        ? "Normal weight"
                        : parseFloat(bmi) < 30
                        ? "Overweight"
                        : "Obese"}
                    </p>
                  </div>

                  <Button className="w-full">Update Metrics</Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Sport Recommendations */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Recommended Sports for You
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Based on your body metrics and preferences
                </p>

                <div className="space-y-3">
                  {recommendedSports.map((rec) => (
                    <div
                      key={rec.sport}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="text-3xl">{rec.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground">{rec.sport}</h3>
                          <span className="text-primary font-bold">{rec.match}% match</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Explore All Sports
                </Button>
              </div>

              {/* Upcoming Activities */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Upcoming Activities
                </h2>

                <div className="space-y-3">
                  {upcomingActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activity.type === "Exercise"
                              ? "bg-primary/20"
                              : activity.type === "Coaching"
                              ? "bg-accent/20"
                              : "bg-success/20"
                          }`}
                        >
                          {activity.type === "Exercise" ? (
                            <Dumbbell className="w-5 h-5 text-primary" />
                          ) : activity.type === "Coaching" ? (
                            <Calendar className="w-5 h-5 text-accent" />
                          ) : (
                            <Award className="w-5 h-5 text-success" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{activity.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {activity.time} • {activity.duration}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
