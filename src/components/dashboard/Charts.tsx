import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { hourlyData, vehicleTypeData, weeklyViolations } from '@/data/mockData';

const COLORS = ['hsl(187, 85%, 53%)', 'hsl(199, 89%, 48%)', 'hsl(142, 76%, 36%)', 'hsl(38, 92%, 50%)'];

export function TrafficChart() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Traffic Overview</h3>
          <p className="text-sm text-muted-foreground">Vehicles & violations over 24 hours</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Vehicles</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Violations</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hourlyData}>
            <defs>
              <linearGradient id="colorVehicles" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorViolations" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 16%)" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(215, 20%, 55%)" 
              tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
            />
            <YAxis 
              stroke="hsl(215, 20%, 55%)" 
              tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(222, 47%, 10%)', 
                border: '1px solid hsl(222, 47%, 16%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="vehicles" 
              stroke="hsl(187, 85%, 53%)" 
              fillOpacity={1} 
              fill="url(#colorVehicles)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="violations" 
              stroke="hsl(0, 72%, 51%)" 
              fillOpacity={1} 
              fill="url(#colorViolations)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function VehicleTypeChart() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Vehicle Distribution</h3>
        <p className="text-sm text-muted-foreground">By vehicle type</p>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={vehicleTypeData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {vehicleTypeData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(222, 47%, 10%)', 
                border: '1px solid hsl(222, 47%, 16%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {vehicleTypeData.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-muted-foreground">{item.name}</span>
            <span className="text-sm font-medium ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WeeklyViolationsChart() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Weekly Violations</h3>
        <p className="text-sm text-muted-foreground">Last 7 days</p>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyViolations}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 16%)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="hsl(215, 20%, 55%)" 
              tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
            />
            <YAxis 
              stroke="hsl(215, 20%, 55%)" 
              tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(222, 47%, 10%)', 
                border: '1px solid hsl(222, 47%, 16%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)'
              }}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(187, 85%, 53%)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
