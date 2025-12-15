export interface Vehicle {
  id: string;
  type: 'car' | 'bike' | 'bus' | 'truck';
  speed: number;
  timestamp: Date;
  location: string;
  isOverspeeding: boolean;
  confidence: number;
  trackingId: string;
}

export interface Violation {
  id: string;
  vehicleId: string;
  vehicleType: string;
  speed: number;
  speedLimit: number;
  timestamp: Date;
  location: string;
  evidenceUrl?: string;
  licensePlate?: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

export interface SpeedZone {
  id: string;
  name: string;
  speedLimit: number;
  location: string;
  isActive: boolean;
}

export interface DashboardStats {
  totalVehicles: number;
  totalViolations: number;
  activeZones: number;
  avgSpeed: number;
  violationsToday: number;
  violationsChange: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'operator' | 'viewer';
  avatar?: string;
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  violations?: number;
  vehicles?: number;
}
