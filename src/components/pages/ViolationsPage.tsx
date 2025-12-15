import { mockViolations } from '@/data/mockData';
import { getVehicleIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Eye, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Loader2,
  Search,
  Filter,
  Download,
  Camera
} from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';

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

export function ViolationsPage() {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by license plate, location..." 
              className="pl-9 bg-secondary/50"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Violations', value: 342, color: 'text-foreground' },
          { label: 'Pending Review', value: 45, color: 'text-warning' },
          { label: 'Under Review', value: 23, color: 'text-primary' },
          { label: 'Resolved', value: 274, color: 'text-success' },
        ].map((stat, index) => (
          <div key={stat.label} className="glass-card p-4 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className={cn("text-2xl font-bold font-mono", stat.color)}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Violations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mockViolations.map((violation, index) => {
          const VehicleIcon = getVehicleIcon(violation.vehicleType);
          const status = statusConfig[violation.status];
          const StatusIcon = status.icon;
          const speedExcess = violation.speed - violation.speedLimit;
          
          return (
            <div 
              key={violation.id}
              className="glass-card p-5 animate-slide-up hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-destructive/20">
                    <VehicleIcon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold">{violation.licensePlate}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground capitalize">
                        {violation.vehicleType}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">ID: {violation.id}</p>
                  </div>
                </div>
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
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-xs text-muted-foreground mb-1">Recorded Speed</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold font-mono text-destructive">{violation.speed}</span>
                    <span className="text-sm text-muted-foreground">km/h</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                    <AlertTriangle className="w-3 h-3" />
                    +{speedExcess} km/h over
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-xs text-muted-foreground mb-1">Speed Limit</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold font-mono">{violation.speedLimit}</span>
                    <span className="text-sm text-muted-foreground">km/h</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {violation.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {format(violation.timestamp, 'PPpp')}
                  <span className="text-xs">({formatDistanceToNow(violation.timestamp, { addSuffix: true })})</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Camera className="w-4 h-4" />
                  View Evidence
                </Button>
                <Button variant="glow" size="sm" className="flex-1 gap-2">
                  <Eye className="w-4 h-4" />
                  Review
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
