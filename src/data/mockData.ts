import { Vehicle, Violation, SpeedZone, DashboardStats, ChartDataPoint } from '@/types';

export const mockStats: DashboardStats = {
  totalVehicles: 12847,
  totalViolations: 342,
  activeZones: 8,
  avgSpeed: 52.3,
  violationsToday: 23,
  violationsChange: 12.5,
};

export const mockVehicles: Vehicle[] = [
  {
    id: 'v1',
    type: 'car',
    speed: 78,
    timestamp: new Date(),
    location: 'Zone A - Highway 101',
    isOverspeeding: true,
    confidence: 0.94,
    trackingId: 'TRK-001',
  },
  {
    id: 'v2',
    type: 'truck',
    speed: 45,
    timestamp: new Date(),
    location: 'Zone B - Main Street',
    isOverspeeding: false,
    confidence: 0.89,
    trackingId: 'TRK-002',
  },
  {
    id: 'v3',
    type: 'bike',
    speed: 92,
    timestamp: new Date(),
    location: 'Zone A - Highway 101',
    isOverspeeding: true,
    confidence: 0.96,
    trackingId: 'TRK-003',
  },
  {
    id: 'v4',
    type: 'bus',
    speed: 55,
    timestamp: new Date(),
    location: 'Zone C - Downtown',
    isOverspeeding: false,
    confidence: 0.91,
    trackingId: 'TRK-004',
  },
  {
    id: 'v5',
    type: 'car',
    speed: 67,
    timestamp: new Date(),
    location: 'Zone D - Industrial',
    isOverspeeding: true,
    confidence: 0.88,
    trackingId: 'TRK-005',
  },
];

export const mockViolations: Violation[] = [
  {
    id: 'vio1',
    vehicleId: 'v1',
    vehicleType: 'car',
    speed: 78,
    speedLimit: 60,
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    location: 'Zone A - Highway 101',
    licensePlate: 'ABC-1234',
    status: 'pending',
  },
  {
    id: 'vio2',
    vehicleId: 'v3',
    vehicleType: 'bike',
    speed: 92,
    speedLimit: 60,
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    location: 'Zone A - Highway 101',
    licensePlate: 'XYZ-5678',
    status: 'reviewed',
  },
  {
    id: 'vio3',
    vehicleId: 'v5',
    vehicleType: 'car',
    speed: 67,
    speedLimit: 50,
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    location: 'Zone D - Industrial',
    licensePlate: 'DEF-9012',
    status: 'pending',
  },
  {
    id: 'vio4',
    vehicleId: 'v6',
    vehicleType: 'truck',
    speed: 85,
    speedLimit: 60,
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    location: 'Zone B - Main Street',
    licensePlate: 'GHI-3456',
    status: 'resolved',
  },
  {
    id: 'vio5',
    vehicleId: 'v7',
    vehicleType: 'car',
    speed: 71,
    speedLimit: 60,
    timestamp: new Date(Date.now() - 1000 * 60 * 90),
    location: 'Zone C - Downtown',
    licensePlate: 'JKL-7890',
    status: 'pending',
  },
];

export const mockSpeedZones: SpeedZone[] = [
  { id: 'z1', name: 'Highway 101', speedLimit: 60, location: 'Zone A', isActive: true },
  { id: 'z2', name: 'Main Street', speedLimit: 40, location: 'Zone B', isActive: true },
  { id: 'z3', name: 'Downtown', speedLimit: 30, location: 'Zone C', isActive: true },
  { id: 'z4', name: 'Industrial Area', speedLimit: 50, location: 'Zone D', isActive: true },
  { id: 'z5', name: 'School Zone', speedLimit: 20, location: 'Zone E', isActive: true },
  { id: 'z6', name: 'Residential', speedLimit: 25, location: 'Zone F', isActive: false },
  { id: 'z7', name: 'Express Lane', speedLimit: 80, location: 'Zone G', isActive: true },
  { id: 'z8', name: 'Service Road', speedLimit: 35, location: 'Zone H', isActive: true },
];

export const hourlyData: ChartDataPoint[] = [
  { name: '00:00', vehicles: 120, violations: 5 },
  { name: '02:00', vehicles: 80, violations: 3 },
  { name: '04:00', vehicles: 60, violations: 2 },
  { name: '06:00', vehicles: 200, violations: 8 },
  { name: '08:00', vehicles: 450, violations: 18 },
  { name: '10:00', vehicles: 380, violations: 15 },
  { name: '12:00', vehicles: 420, violations: 16 },
  { name: '14:00', vehicles: 390, violations: 14 },
  { name: '16:00', vehicles: 480, violations: 22 },
  { name: '18:00', vehicles: 520, violations: 28 },
  { name: '20:00', vehicles: 340, violations: 12 },
  { name: '22:00', vehicles: 180, violations: 7 },
];

export const vehicleTypeData: ChartDataPoint[] = [
  { name: 'Cars', value: 65 },
  { name: 'Bikes', value: 18 },
  { name: 'Trucks', value: 12 },
  { name: 'Buses', value: 5 },
];

export const weeklyViolations: ChartDataPoint[] = [
  { name: 'Mon', value: 42 },
  { name: 'Tue', value: 38 },
  { name: 'Wed', value: 55 },
  { name: 'Thu', value: 47 },
  { name: 'Fri', value: 63 },
  { name: 'Sat', value: 51 },
  { name: 'Sun', value: 46 },
];
