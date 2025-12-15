import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings as SettingsIcon, 
  Shield, 
  Bell, 
  Database, 
  Camera,
  Save,
  RefreshCw
} from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* AI Detection Settings */}
      <div className="glass-card p-6 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/20">
            <Camera className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">AI Detection Settings</h3>
            <p className="text-sm text-muted-foreground">Configure YOLO and tracking parameters</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Confidence Threshold
            </label>
            <Input 
              type="number" 
              defaultValue={0.5} 
              step={0.1}
              min={0}
              max={1}
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Minimum confidence score for detection (0-1)</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              IOU Threshold
            </label>
            <Input 
              type="number" 
              defaultValue={0.4} 
              step={0.1}
              min={0}
              max={1}
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Intersection over union threshold for NMS</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Frame Skip Rate
            </label>
            <Input 
              type="number" 
              defaultValue={2} 
              min={1}
              max={10}
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Process every Nth frame for performance</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Tracking Max Age
            </label>
            <Input 
              type="number" 
              defaultValue={30} 
              min={1}
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Maximum frames to keep track without detection</p>
          </div>
        </div>
      </div>

      {/* Speed Calibration */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-warning/20">
            <SettingsIcon className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h3 className="font-semibold">Speed Calibration</h3>
            <p className="text-sm text-muted-foreground">Configure distance and speed calculation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Reference Distance (meters)
            </label>
            <Input 
              type="number" 
              defaultValue={10} 
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Real-world distance between calibration points</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Pixels Per Meter
            </label>
            <Input 
              type="number" 
              defaultValue={50} 
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Camera calibration factor</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Camera FPS
            </label>
            <Input 
              type="number" 
              defaultValue={30} 
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Frames per second of input video</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Speed Smoothing Window
            </label>
            <Input 
              type="number" 
              defaultValue={5} 
              className="bg-secondary/50"
            />
            <p className="text-xs text-muted-foreground mt-1">Number of frames for speed averaging</p>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-success/20">
            <Bell className="w-5 h-5 text-success" />
          </div>
          <div>
            <h3 className="font-semibold">Notification Settings</h3>
            <p className="text-sm text-muted-foreground">Configure alerts and notifications</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Alert Email
            </label>
            <Input 
              type="email" 
              defaultValue="admin@speedguard.com" 
              className="bg-secondary/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Critical Speed Threshold (km/h over limit)
            </label>
            <Input 
              type="number" 
              defaultValue={30} 
              className="bg-secondary/50"
            />
          </div>
        </div>
      </div>

      {/* Database Settings */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/20">
            <Database className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <h3 className="font-semibold">Database Settings</h3>
            <p className="text-sm text-muted-foreground">Data storage and retention</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Data Retention (days)
            </label>
            <Input 
              type="number" 
              defaultValue={90} 
              className="bg-secondary/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Evidence Storage Path
            </label>
            <Input 
              type="text" 
              defaultValue="/data/violations" 
              className="bg-secondary/50 font-mono text-sm"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 justify-end">
        <Button variant="outline" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Reset to Defaults
        </Button>
        <Button variant="glow" className="gap-2">
          <Save className="w-4 h-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
}
