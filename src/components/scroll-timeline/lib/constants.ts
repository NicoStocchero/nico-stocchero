import {
  Calendar,
  Code,
  Rocket,
  Award,
  Star,
  Heart,
  Zap,
  Crown,
  Search,
  Layout,
  Cpu,
  Edit,
  BarChart,
  Gauge,
  Monitor,
  Sparkles,
  Eye,
  Accessibility,
  Layers,
  FileText,
  LucideIcon,
} from "lucide-react";

// Icon mapping for timeline events
export const TIMELINE_ICONS: Record<string, LucideIcon> = {
  Calendar,
  Code,
  Rocket,
  Award,
  Star,
  Heart,
  Zap,
  Crown,
  Search,
  Layout,
  Cpu,
  Edit,
  BarChart,
};

// Icon mapping for feature cards
export const FEATURE_ICONS: Record<string, LucideIcon> = {
  Speed: Gauge,
  Device: Monitor,
  Sparkles,
  Eye,
  Accessibility,
  Layers,
  FileText,
};

// Timeline layout constants
export const TIMELINE_LAYOUT = {
  CARD_MAX_WIDTH: "max-w-md lg:max-w-lg",
  CARD_PADDING: "p-6 lg:p-8",
  NODE_SIZE: "w-6 h-6",
  LINE_WIDTH: "w-0.5",
} as const;
