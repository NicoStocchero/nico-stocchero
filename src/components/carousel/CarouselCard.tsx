import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Carousel3DItem } from "./types";

const CARD_BG = "bg-gradient-to-br from-[#232E46]/98 to-[#3C4966]/90";
const BORDER_BASE = "border border-[#232E46]/70";
const BORDER_HOVER = "border-2 border-[#D0C3A5]";
const SHADOW_BASE = "shadow-[0_6px_24px_0_rgba(60,73,102,0.15)]";
const SHADOW_HOVER = "shadow-[0_18px_40px_0_rgba(208,195,165,0.13)]";

export const CarouselCard: React.FC<{
  item: Carousel3DItem;
  className?: string;
}> = ({ item, className }) => {
  // Tilt parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [8, -8]);
  const rotateY = useTransform(x, [-40, 40], [-8, 8]);
  const [isHovered, setHovered] = React.useState(false);

  // Glow position relative to mouse
  const glowX = useTransform(x, [-40, 40], [-20, 20]);
  const glowY = useTransform(y, [-40, 40], [-20, 20]);

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-3xl transition-all duration-400 will-change-transform cursor-pointer group select-none",
        CARD_BG,
        BORDER_BASE,
        SHADOW_BASE,
        "h-[500px] flex flex-col my-4",
        isHovered ? `${BORDER_HOVER} ${SHADOW_HOVER}` : "",
        className
      )}
      style={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered
          ? "0 18px 40px 0 rgba(208,195,165,0.13)"
          : "0 6px 24px 0 rgba(60,73,102,0.15)",
      }}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        x.set((px - 50) * 0.6);
        y.set((py - 50) * 0.6);
      }}
      onPointerLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      onPointerEnter={() => setHovered(true)}
    >
      {/* Glow suave que sigue al mouse */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 w-[200%] h-[200%] rounded-3xl"
        style={{
          translateX: glowX,
          translateY: glowY,
          background:
            "radial-gradient(ellipse 200px 150px at center, rgba(208,195,165,0.15), transparent 80%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s",
          filter: "blur(30px)",
          zIndex: 10,
        }}
      />

      {/* Imagen arriba */}
      <div
        className="relative w-full h-48 flex-shrink-0 overflow-hidden rounded-t-3xl"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      </div>

      {/* Cuerpo abajo */}
      <div className="flex flex-col gap-3 flex-grow px-6 py-4 justify-end">
        {item.highlight && (
          <span className="text-xs font-semibold uppercase text-[#D0C3A5] tracking-wide">
            {item.highlight}
          </span>
        )}

        <h3 className="text-xl font-extrabold text-white mb-1 tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="text-sm text-white/80 mb-2 line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#3C4966]/35 text-[#D0C3A5] border border-[#D0C3A5]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col mt-auto pt-2 max-w-max">
          <Link
            href={item.link}
            className="relative inline-flex items-center text-sm font-bold text-[#D0C3A5] group transition"
          >
            Ver más
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span
              className="absolute left-0 -bottom-0.5 h-0.5 bg-[#D0C3A5]/90 rounded-full transition-all duration-500 w-0 group-hover:w-full"
              style={{ boxShadow: "0 0 6px 0 #D0C3A599" }}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
