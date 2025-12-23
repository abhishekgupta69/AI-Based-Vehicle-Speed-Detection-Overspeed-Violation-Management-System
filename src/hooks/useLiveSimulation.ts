import { useEffect, useState } from "react";
import {
  mockVehicles,
  mockViolations,
  mockStats,
} from "@/data/mockData";
import { Vehicle, Violation, DashboardStats } from "@/types";

export function useLiveSimulation() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [violations, setViolations] = useState<Violation[]>([]);
  const [stats, setStats] = useState<DashboardStats>(mockStats);

  useEffect(() => {
    let vehicleIndex = 0;

    const interval = setInterval(() => {
      const vehicle = mockVehicles[vehicleIndex % mockVehicles.length];

      const liveVehicle: Vehicle = {
        ...vehicle,
        id: `v-${Date.now()}`,
        timestamp: new Date(),
      };

      setVehicles((prev) => [liveVehicle, ...prev.slice(0, 10)]);

      if (liveVehicle.isOverspeeding) {
        const violation = mockViolations.find(
          (v) => v.vehicleId === vehicle.id
        );

        if (violation) {
          setViolations((prev) => [
            {
              ...violation,
              id: `vio-${Date.now()}`,
              timestamp: new Date(),
            },
            ...prev.slice(0, 10),
          ]);
        }
      }

      setStats((prev) => ({
        ...prev,
        totalVehicles: prev.totalVehicles + 1,
        totalViolations: liveVehicle.isOverspeeding
          ? prev.totalViolations + 1
          : prev.totalViolations,
        violationsToday: liveVehicle.isOverspeeding
          ? prev.violationsToday + 1
          : prev.violationsToday,
      }));

      vehicleIndex++;
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return { vehicles, violations, stats };
}
