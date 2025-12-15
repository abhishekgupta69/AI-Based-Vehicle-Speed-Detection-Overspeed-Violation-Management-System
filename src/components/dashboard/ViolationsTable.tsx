import { mockViolations } from '@/data/mockData';
import { getVehicleIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Eye, Clock, MapPin, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const statusConfig = {
  pending: {
    label: 'Pending',
    className: 'bg-warning/20 text-warning border-warning/30',
    icon: Loader2,
  },
  reviewed: {
    label: 'Reviewed',
    className: 'bg-primary/20 text-primary border-primary/30',
    icon: Eye,
  },
  resolved: {
    label: 'Resolved',
    className: 'bg-success/20 text-success border-success/30',
    icon: CheckCircle,
  },
};

export function ViolationsTable() {
  return (
    <div className="glass-card overflow-hidden animate-slide-up" style={{ animationDelay: '500ms' }}>
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Recent Violations</h3>
            <p className="text-sm text-muted-foreground">Overspeed incidents requiring attention</p>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Vehicle</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Speed</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Time</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockViolations.map((violation, index) => {
              const VehicleIcon = getVehicleIcon(violation.vehicleType);
              const status = statusConfig[violation.status];
              const StatusIcon = status.icon;
              const speedExcess = violation.speed - violation.speedLimit;
              
              return (
                <tr 
                  key={violation.id} 
                  className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary">
                        <VehicleIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-mono text-sm font-medium">{violation.licensePlate}</span>
                        <span className="text-xs text-muted-foreground ml-2 capitalize">{violation.vehicleType}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold font-mono text-destructive">{violation.speed}</span>
                      <span className="text-xs text-muted-foreground">/ {violation.speedLimit} km/h</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                      <AlertTriangle className="w-3 h-3" />
                      +{speedExcess} km/h over limit
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {violation.location}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {formatDistanceToNow(violation.timestamp, { addSuffix: true })}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                      status.className
                    )}>
                      <StatusIcon className={cn(
                        "w-3 h-3",
                        violation.status === 'pending' && "animate-spin"
                      )} />
                      {status.label}
                    </span>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
