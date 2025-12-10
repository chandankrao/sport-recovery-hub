import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Activity,
  Users,
  Video,
  Calendar,
  Settings,
  BarChart3,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  Menu,
  TrendingUp,
  UserPlus,
  PlayCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { icon: BarChart3, label: "Dashboard", href: "/admin" },
  { icon: Video, label: "Recovery Programs", href: "/admin/programs" },
  { icon: Users, label: "Coaches", href: "/admin/coaches" },
  { icon: Calendar, label: "Tournaments", href: "/admin/tournaments" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const statsCards = [
  {
    label: "Total Users",
    value: "12,458",
    change: "+12%",
    icon: Users,
    color: "primary",
  },
  {
    label: "Active Programs",
    value: "156",
    change: "+8%",
    icon: PlayCircle,
    color: "accent",
  },
  {
    label: "Registered Coaches",
    value: "248",
    change: "+15%",
    icon: UserPlus,
    color: "success",
  },
  {
    label: "Tournaments",
    value: "42",
    change: "+5%",
    icon: Calendar,
    color: "warning",
  },
];

const recentUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", sport: "Football", joined: "2 hours ago" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", sport: "Tennis", joined: "5 hours ago" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", sport: "Basketball", joined: "1 day ago" },
  { id: 4, name: "Emily Brown", email: "emily@example.com", sport: "Swimming", joined: "2 days ago" },
];

const recentPrograms = [
  { id: 1, title: "ACL Recovery Program", sport: "Football", views: 1234, status: "Active" },
  { id: 2, title: "Tennis Elbow Rehab", sport: "Tennis", views: 856, status: "Active" },
  { id: 3, title: "Ankle Sprain Recovery", sport: "Basketball", views: 2341, status: "Active" },
  { id: 4, title: "Shoulder Recovery", sport: "Swimming", views: 567, status: "Draft" },
];

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-40",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            {sidebarOpen && (
              <span className="font-display font-bold text-lg text-foreground">
                Admin
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-muted-foreground hover:text-foreground"
          >
            {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <link.icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="font-medium">{link.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Back to Site */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Link to="/">
            <Button variant="outline" className={cn("w-full", !sidebarOpen && "px-2")}>
              {sidebarOpen ? "Back to Site" : "←"}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="font-display text-xl font-semibold text-foreground">
              Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your platform content and users
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-9 w-64 bg-muted border-border"
              />
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-card rounded-xl p-5 border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      stat.color === "primary" && "bg-primary/20",
                      stat.color === "accent" && "bg-accent/20",
                      stat.color === "success" && "bg-success/20",
                      stat.color === "warning" && "bg-warning/20"
                    )}
                  >
                    <stat.icon
                      className={cn(
                        "w-5 h-5",
                        stat.color === "primary" && "text-primary",
                        stat.color === "accent" && "text-accent",
                        stat.color === "success" && "text-success",
                        stat.color === "warning" && "text-warning"
                      )}
                    />
                  </div>
                  <span className="flex items-center gap-1 text-success text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </span>
                </div>
                <p className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-gradient-card rounded-xl border border-border">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Recent Users
                </h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground">{user.sport}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.joined}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Programs */}
            <div className="bg-gradient-card rounded-xl border border-border">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Recovery Programs
                </h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {recentPrograms.map((program) => (
                    <div
                      key={program.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {program.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {program.sport} • {program.views} views
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "px-2 py-0.5 text-xs rounded",
                            program.status === "Active"
                              ? "bg-success/20 text-success"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {program.status}
                        </span>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
