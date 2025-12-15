import { 
  Car, 
  Bike, 
  Truck, 
  Bus, 
  AlertTriangle, 
  Activity,
  Gauge,
  MapPin,
  TrendingUp,
  TrendingDown,
  Clock,
  Eye,
  Camera,
  Settings,
  BarChart3,
  Shield,
  Users,
  FileText,
  Home,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Check,
  Loader2,
  Search,
  Bell,
  Filter
} from 'lucide-react';

export const Icons = {
  Car,
  Bike,
  Truck,
  Bus,
  AlertTriangle,
  Activity,
  Gauge,
  MapPin,
  TrendingUp,
  TrendingDown,
  Clock,
  Eye,
  Camera,
  Settings,
  BarChart3,
  Shield,
  Users,
  FileText,
  Home,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Check,
  Loader2,
  Search,
  Bell,
  Filter,
};

export type IconName = keyof typeof Icons;

export const getVehicleIcon = (type: string) => {
  switch (type) {
    case 'car':
      return Car;
    case 'bike':
      return Bike;
    case 'truck':
      return Truck;
    case 'bus':
      return Bus;
    default:
      return Car;
  }
};
