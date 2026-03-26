import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuestionScreenProps {
  step: 'q1' | 'q2' | 'q3';
  value: number;
  onChange: (val: number) => void;
  onBack: () => void;
  onNext: () => void;
}

const getQuestionData = (step: 'q1' | 'q2' | 'q3') => {
  switch (step) {
    case 'q1':
      return {
        stepLabel: '01. Áp lực & Leadership',
        question: 'Trong công việc, bạn cảm thấy mình đang điều hướng áp lực hay bị áp lực cuốn đi?',
        minLabel: 'Cạn kiệt',
        maxLabel: 'Làm chủ'
      };
    case 'q2':
      return {
        stepLabel: '02. Nhận thức',
        question: 'Khi quyết định khó khăn, bạn lắng nghe tiếng nói bên trong hay kỳ vọng bên ngoài?',
        minLabel: 'Chạy theo kỳ vọng',
        maxLabel: 'Vững vàng'
      };
    case 'q3':
      return {
        stepLabel: '03. Thân & Tâm',
        question: 'Bạn đánh giá sự liên kết giữa ăn uống và sự tĩnh lặng tâm trí tuần qua thế nào?',
        minLabel: 'Mất kết nối',
        maxLabel: 'Cân bằng'
      };
  }
};

export const QuestionScreen = ({ step, value, onChange, onBack, onNext }: QuestionScreenProps) => {
  const data = getQuestionData(step);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <span className="text-[#8B5E3C] font-medium text-sm tracking-widest uppercase">
          {data.stepLabel}
        </span>
        <h2 className="text-2xl font-light text-[#1A1A1A]">
          {data.question}
        </h2>
      </div>

      <div className="space-y-6">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-1.5 bg-[#E8E1D9] rounded-lg appearance-none cursor-pointer accent-[#8B5E3C]"
        />
        <div className="flex justify-between text-xs font-medium text-[#A39A92] uppercase tracking-tighter">
          <span>{data.minLabel}</span>
          <span>{data.maxLabel}</span>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button 
          onClick={onBack}
          className="flex-1 py-4 border border-[#E8E1D9] rounded-2xl hover:bg-[#F9F8F6] transition-colors font-medium text-[#6B6B6B] cursor-pointer"
        >
          Quay lại
        </button>
        <button 
          onClick={onNext}
          className="flex-1 py-4 bg-[#8B5E3C] text-white rounded-2xl hover:bg-[#704B30] transition-all font-medium flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#8B5E3C]/20"
        >
          Tiếp theo
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
