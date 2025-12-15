import { mockSpeedZones } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Plus, Edit2, Trash2, MapPin, Gauge, Power } from 'lucide-react';

export function SpeedZonesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground">
            Configure speed limits for different monitoring zones
          </p>
        </div>
        <Button variant="glow" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Zone
        </Button>
      </div>

      {/* Zones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSpeedZones.map((zone, index) => (
          <div 
            key={zone.id}
            className={cn(
              "glass-card p-5 transition-all duration-300 animate-slide-up",
              zone.isActive 
                ? "border-primary/30 hover:border-primary/50" 
                : "opacity-60 hover:opacity-80"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-lg",
                  zone.isActive ? "bg-primary/20" : "bg-muted"
                )}>
                  <MapPin className={cn(
                    "w-5 h-5",
                    zone.isActive ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                <div>
                  <h3 className="font-semibold">{zone.name}</h3>
                  <p className="text-sm text-muted-foreground">{zone.location}</p>
                </div>
              </div>
              <div className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                zone.isActive 
                  ? "bg-success/20 text-success" 
                  : "bg-muted text-muted-foreground"
              )}>
                <Power className="w-3 h-3" />
                {zone.isActive ? 'Active' : 'Inactive'}
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 mb-4">
              <Gauge className="w-5 h-5 text-warning" />
              <span className="text-sm text-muted-foreground">Speed Limit:</span>
              <span className="text-2xl font-bold font-mono ml-auto">{zone.speedLimit}</span>
              <span className="text-sm text-muted-foreground">km/h</span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <Edit2 className="w-4 h-4" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Settings */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Global Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Default Speed Limit (km/h)
            </label>
            <Input 
              type="number" 
              defaultValue={50} 
              className="bg-secondary/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Tolerance Threshold (%)
            </label>
            <Input 
              type="number" 
              defaultValue={5} 
              className="bg-secondary/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Alert Threshold (km/h over)
            </label>
            <Input 
              type="number" 
              defaultValue={10} 
              className="bg-secondary/50"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="glow">Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
