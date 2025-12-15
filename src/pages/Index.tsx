import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardPage } from '@/components/pages/DashboardPage';
import { SpeedZonesPage } from '@/components/pages/SpeedZonesPage';
import { ViolationsPage } from '@/components/pages/ViolationsPage';
import { SettingsPage } from '@/components/pages/SettingsPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'zones':
        return <SpeedZonesPage />;
      case 'violations':
        return <ViolationsPage />;
      case 'settings':
        return <SettingsPage />;
      case 'monitoring':
        return <DashboardPage />;
      case 'analytics':
        return <DashboardPage />;
      case 'reports':
        return (
          <div className="glass-card p-12 text-center animate-slide-up">
            <h2 className="text-2xl font-bold mb-2">Reports Module</h2>
            <p className="text-muted-foreground">Generate PDF/Excel reports with violation data</p>
          </div>
        );
      case 'users':
        return (
          <div className="glass-card p-12 text-center animate-slide-up">
            <h2 className="text-2xl font-bold mb-2">User Management</h2>
            <p className="text-muted-foreground">Manage system users and roles</p>
          </div>
        );
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DashboardLayout
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      title=""
    >
      {renderPage()}
    </DashboardLayout>
  );
};

export default Index;
