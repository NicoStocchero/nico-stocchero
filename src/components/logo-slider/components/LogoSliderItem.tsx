import React from "react";
import type { LogoSliderItem as LogoSliderItemType } from "../types";
import { handleItemClick, handleKeyDown } from "../services";

interface LogoSliderItemProps {
  item: LogoSliderItemType;
  index: number;
  onItemClick?: (item: LogoSliderItemType) => void;
}

export function LogoSliderItem({
  item,
  index,
  onItemClick,
}: LogoSliderItemProps) {
  const handleClick = () => {
    handleItemClick(item, onItemClick);
  };

  const handleKeyDownEvent = (e: React.KeyboardEvent) => {
    handleKeyDown(e, item, onItemClick);
  };

  return (
    <li
      className="sliding-marquee-item text-foreground"
      style={{ "--index": index } as React.CSSProperties}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDownEvent}
    >
      {item.content}
    </li>
  );
}
