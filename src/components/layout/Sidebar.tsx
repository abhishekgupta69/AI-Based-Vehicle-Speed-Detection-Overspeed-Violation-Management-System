import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Camera, 
  AlertTriangle, 
  Settings, 
  BarChart3, 
  Users, 
  FileText,
  Shield,
  LogOut,
  ChevronLeft,
  Gauge
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'monitoring', label: 'Live Monitoring', icon: Camera },
  { id: 'violations', label: 'Violations', icon: AlertTriangle },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'zones', label: 'Speed Zones', icon: Gauge },
  { id: 'reports', label: 'Reports', icon: FileText },
];

const adminNavigation = [
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'settings', label: 'System Settings', icon: Settings },
];

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3 transition-opacity duration-300",
          collapsed && "opacity-0 w-0 overflow-hidden"
        )}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">SpeedGuard</h1>
            <p className="text-xs text-muted-foreground">AI Detection</p>
          </div>
        </div>
        {collapsed && (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn("shrink-0", collapsed && "hidden")}
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="mb-4">
          {!collapsed && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3">
              Main Menu
            </span>
          )}
        </div>
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}

        <div className="pt-6 pb-2">
          {!collapsed && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3">
              Administration
            </span>
          )}
        </div>
        {adminNavigation.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>

      {/* Expand button when collapsed */}
      {collapsed && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 w-6 h-6 rounded-full border border-border bg-background"
          onClick={() => setCollapsed(false)}
        >
          <ChevronLeft className="w-3 h-3 rotate-180" />
        </Button>
      )}
    </aside>
  );
}
