export interface CountUpConfig {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export interface CountUpItem {
  id: string;
  config: CountUpConfig;
  label: string;
  color?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export class CountUpService {
  static createCountUpItems(items: Omit<CountUpItem, 'id'>[]): CountUpItem[] {
    return items.map((item, index) => ({
      ...item,
      id: `countup-${index}`,
    }));
  }

  static formatValue(value: number, config: CountUpConfig): string {
    const { prefix = '', suffix = '', decimals = 0 } = config;
    const formattedValue = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
    return `${prefix}${formattedValue}${suffix}`;
  }

  static getDefaultConfig(): Partial<CountUpConfig> {
    return {
      duration: 2,
      decimals: 0,
      prefix: '',
      suffix: '',
    };
  }
}