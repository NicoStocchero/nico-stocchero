import {
  LucideIcon,
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
  Smartphone,
  RefreshCw,
  Settings,
  CheckCircle,
  // Add more icons as needed
} from "lucide-react";
import { IconType, IconConfig } from "./types";

/**
 * Global service for handling icon-related operations across the application
 */
export class IconService {
  /**
   * Icon mappings organized by category
   */
  private static readonly ICON_MAPPINGS: IconConfig = {
    timeline: {
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
    },
    feature: {
      Speed: Gauge,
      Device: Monitor,
      Sparkles,
      Eye,
      Accessibility,
      Layers,
      FileText,
      Gauge,
      Monitor,
      Smartphone,
      RefreshCw,
      Settings,
      Zap,
      Crown,
    },
    general: {
      // Add general icons here
      Star,
      Heart,
      Zap,
      Crown,
      Sparkles,
      Gauge,
      Monitor,
      Eye,
      Smartphone,
      RefreshCw,
      Settings,
      CheckCircle,
    },
  };

  /**
   * Gets an icon component by name and category
   */
  static getIcon(
    iconName: string,
    category: "timeline" | "feature" | "general" = "general"
  ): LucideIcon {
    const categoryIcons = this.ICON_MAPPINGS[category];
    return categoryIcons[iconName] || this.ICON_MAPPINGS.general.Star;
  }

  /**
   * Gets a timeline icon component
   */
  static getTimelineIcon(icon: string | LucideIcon | undefined): LucideIcon {
    if (typeof icon === "function") {
      return icon;
    }

    if (typeof icon === "string") {
      return this.getIcon(icon, "timeline");
    }

    return this.ICON_MAPPINGS.timeline.Calendar;
  }

  /**
   * Gets a feature icon component
   */
  static getFeatureIcon(icon: string | LucideIcon | undefined): LucideIcon {
    if (typeof icon === "function") {
      return icon;
    }

    if (typeof icon === "string") {
      return this.getIcon(icon, "feature");
    }

    return this.ICON_MAPPINGS.general.Star;
  }

  /**
   * Gets all available icons for a specific category
   */
  static getAvailableIcons(
    category: "timeline" | "feature" | "general"
  ): Record<string, LucideIcon> {
    return this.ICON_MAPPINGS[category];
  }

  /**
   * Gets all icon mappings
   */
  static getAllIconMappings(): IconConfig {
    return this.ICON_MAPPINGS;
  }

  /**
   * Checks if an icon exists in a specific category
   */
  static hasIcon(
    iconName: string,
    category: "timeline" | "feature" | "general"
  ): boolean {
    return iconName in this.ICON_MAPPINGS[category];
  }

  /**
   * Gets icon information as IconType
   */
  static getIconInfo(
    iconName: string,
    category: "timeline" | "feature" | "general"
  ): IconType | null {
    if (this.hasIcon(iconName, category)) {
      return {
        name: iconName,
        component: this.getIcon(iconName, category),
        category,
      };
    }
    return null;
  }

  /**
   * Registers a new icon to a category
   */
  static registerIcon(
    iconName: string,
    iconComponent: LucideIcon,
    category: "timeline" | "feature" | "general"
  ): void {
    this.ICON_MAPPINGS[category][iconName] = iconComponent;
  }

  /**
   * Gets all registered icon names for a category
   */
  static getIconNames(category: "timeline" | "feature" | "general"): string[] {
    return Object.keys(this.ICON_MAPPINGS[category]);
  }
}
