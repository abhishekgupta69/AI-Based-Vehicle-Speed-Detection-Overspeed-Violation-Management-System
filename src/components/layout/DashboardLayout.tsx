import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  title: string;
  subtitle?: string;
}

const pageInfo: Record<string, { title: string; subtitle: string }> = {
  dashboard: { title: 'Dashboard', subtitle: 'Real-time traffic monitoring overview' },
  monitoring: { title: 'Live Monitoring', subtitle: 'Watch vehicles in real-time' },
  violations: { title: 'Violations', subtitle: 'Manage overspeed incidents' },
  analytics: { title: 'Analytics', subtitle: 'Traffic patterns and insights' },
  zones: { title: 'Speed Zones', subtitle: 'Configure monitoring zones' },
  reports: { title: 'Reports', subtitle: 'Generate and export reports' },
  users: { title: 'User Management', subtitle: 'Manage system users' },
  settings: { title: 'System Settings', subtitle: 'Configure system parameters' },
};

export function DashboardLayout({ children, currentPage, onNavigate }: DashboardLayoutProps) {
  const info = pageInfo[currentPage] || { title: 'SpeedGuard', subtitle: '' };

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
      </div>

      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      
      <main className="ml-64 min-h-screen relative">
        <Header title={info.title} subtitle={info.subtitle} />
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
