import { StatCard } from '@/components/dashboard/StatCard';
import { TrafficChart, VehicleTypeChart, WeeklyViolationsChart } from '@/components/dashboard/Charts';
import { LiveMonitor } from '@/components/dashboard/LiveMonitor';
import { ViolationsTable } from '@/components/dashboard/ViolationsTable';
import { mockStats } from '@/data/mockData';
import { Car, AlertTriangle, Gauge, MapPin } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total Vehicles Today"
          value={mockStats.totalVehicles.toLocaleString()}
          change={8.2}
          icon={Car}
          iconColor="text-primary"
          delay={0}
        />
        <StatCard
          title="Violations Today"
          value={mockStats.violationsToday}
          change={mockStats.violationsChange}
          icon={AlertTriangle}
          iconColor="text-destructive"
          delay={50}
        />
        <StatCard
          title="Average Speed"
          value={`${mockStats.avgSpeed} km/h`}
          icon={Gauge}
          iconColor="text-warning"
          delay={100}
        />
        <StatCard
          title="Active Zones"
          value={mockStats.activeZones}
          icon={MapPin}
          iconColor="text-success"
          delay={150}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Traffic Chart - Takes 2 columns */}
        <div className="xl:col-span-2">
          <TrafficChart />
        </div>
        
        {/* Live Monitor */}
        <div className="xl:col-span-1">
          <LiveMonitor />
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VehicleTypeChart />
        <WeeklyViolationsChart />
      </div>

      {/* Violations Table */}
      <ViolationsTable />
    </div>
  );
}
