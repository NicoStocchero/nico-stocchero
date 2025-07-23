import { LucideIcon } from "lucide-react";

export interface TimelineTip {
  text: string;
  subtext: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badgeLabel?: string;
}
