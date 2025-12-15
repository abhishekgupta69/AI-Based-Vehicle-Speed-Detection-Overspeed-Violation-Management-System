import { mockVehicles } from '@/data/mockData';
import { getVehicleIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { AlertTriangle, MapPin, Clock } from 'lucide-react';

export function LiveMonitor() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-success rounded-full pulse-dot" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Live Monitoring</h3>
            <p className="text-sm text-muted-foreground">Real-time vehicle tracking</p>
          </div>
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {mockVehicles.length} vehicles detected
        </span>
      </div>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {mockVehicles.map((vehicle, index) => {
          const VehicleIcon = getVehicleIcon(vehicle.type);
          
          return (
            <div 
              key={vehicle.id}
              className={cn(
                "p-4 rounded-lg border transition-all duration-300",
                vehicle.isOverspeeding 
                  ? "bg-destructive/10 border-destructive/30 hover:border-destructive/50" 
                  : "bg-secondary/30 border-border/50 hover:border-primary/30"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    vehicle.isOverspeeding ? "bg-destructive/20" : "bg-secondary"
                  )}>
                    <VehicleIcon className={cn(
                      "w-5 h-5",
                      vehicle.isOverspeeding ? "text-destructive" : "text-primary"
                    )} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-medium">{vehicle.trackingId}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground capitalize">
                        {vehicle.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {vehicle.location}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={cn(
                    "text-2xl font-bold font-mono",
                    vehicle.isOverspeeding ? "text-destructive" : "text-foreground"
                  )}>
                    {vehicle.speed}
                    <span className="text-xs font-normal text-muted-foreground ml-1">km/h</span>
                  </div>
                  {vehicle.isOverspeeding && (
                    <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                      <AlertTriangle className="w-3 h-3" />
                      OVERSPEED
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  Just now
                </div>
                <div className="text-xs text-muted-foreground">
                  Confidence: <span className="font-mono text-foreground">{(vehicle.confidence * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
