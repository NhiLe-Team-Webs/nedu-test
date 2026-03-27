import React from 'react';
import { PERSONA_ROUTES } from '@/data/maxdiff-data';

interface StageSelectionProps {
  onSelect: (personaId: string) => void;
}

export const StageSelectionScreen = ({ onSelect }: StageSelectionProps) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <span className="text-[#8B5E3C] font-semibold text-xs tracking-widest uppercase">
          TRƯỚC TIÊN
        </span>
        <h2 className="text-2xl md:text-3xl font-normal text-[#1A1A1A] leading-snug">
          Bạn đang ở giai đoạn nào trong cuộc sống?
        </h2>
      </div>

      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 pb-2">
        {PERSONA_ROUTES.map((route) => (
          <button
            key={route.persona_id}
            onClick={() => onSelect(route.persona_id)}
            className={`w-full text-left p-4 rounded-2xl border bg-white hover:shadow-sm transition-all flex items-center gap-3 cursor-pointer group ${
              route.persona_id === 'others'
                ? 'border-dashed border-[#D4C9BC] hover:border-[#8B5E3C] hover:bg-[#FDF1E9]'
                : 'border-[#F0EBE5] hover:border-[#8B5E3C] hover:bg-[#F9F8F6]'
            }`}
          >
            <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
              {route.emoji}
            </span>
            <span className={`font-medium text-sm md:text-base ${
              route.persona_id === 'others' ? 'text-[#8B7E74]' : 'text-[#2D2D2D]'
            }`}>
              {route.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
