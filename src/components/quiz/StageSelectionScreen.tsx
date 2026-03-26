import React from 'react';

interface StageSelectionProps {
  onSelect: (stageId: string) => void;
}

const STAGES = [
  { id: 'student', icon: '🎓', label: 'Còn đang học / Sinh viên' },
  { id: 'junior', icon: '🌱', label: 'Mới đi làm 1–3 năm' },
  { id: 'office', icon: '🧭', label: 'Nhân viên văn phòng / Corporate' },
  { id: 'freelance', icon: '🦋', label: 'Freelancer / Tự kinh doanh' },
  { id: 'manager', icon: '💼', label: 'Quản lý / Chủ doanh nghiệp nhỏ' },
  { id: 'mother', icon: '🌸', label: 'Phụ nữ / Mẹ đang cân bằng gia đình & sự nghiệp' },
  { id: 'public_servant', icon: '🌾', label: 'Giáo viên / Công chức / Viên chức' },
  { id: 'executive', icon: '⛰️', label: 'Lãnh đạo cấp cao / Doanh nhân' },
];

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

      {/* Danh sách các lựa chọn có thể scroll nếu màn hình nhỏ */}
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 pb-2">
        {STAGES.map((stage) => (
          <button
            key={stage.id}
            onClick={() => onSelect(stage.id)}
            className="w-full text-left p-4 rounded-2xl border border-[#F0EBE5] bg-white hover:border-[#8B5E3C] hover:bg-[#F9F8F6] hover:shadow-sm transition-all flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
              {stage.icon}
            </span>
            <span className="text-[#2D2D2D] font-medium text-sm md:text-base">
              {stage.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
