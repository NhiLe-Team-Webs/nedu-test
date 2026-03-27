import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuestionScreenProps {
  step: 'q1' | 'q2' | 'q3';
  value: number;
  onChange: (val: number) => void;
  onBack: () => void;
  onNext: () => void;
}

// Helper to fetch step‑specific data
const getQuestionData = (step: 'q1' | 'q2' | 'q3') => {
  switch (step) {
    case 'q1':
      return {
        stepLabel: '01. Áp lực & Leadership',
        question: 'Trong công việc, bạn cảm thấy mình đang điều hướng áp lực hay bị áp lực cuốn đi?',
        minLabel: 'Cạn kiệt',
        maxLabel: 'Làm chủ',
      };
    case 'q2':
      return {
        stepLabel: '02. Nhận thức',
        question: 'Khi quyết định khó khăn, bạn lắng nghe tiếng nói bên trong hay kỳ vọng bên ngoài?',
        minLabel: 'Chạy theo kỳ vọng',
        maxLabel: 'Vững vàng',
      };
    case 'q3':
      return {
        stepLabel: '03. Thân & Tâm',
        question: 'Bạn đánh giá sự liên kết giữa ăn uống và sự tĩnh lặng tâm trí tuần qua thế nào?',
        minLabel: 'Mất kết nối',
        maxLabel: 'Cân bằng',
      };
  }
};

export const QuestionScreen = ({ step, value, onChange, onBack, onNext }: QuestionScreenProps) => {
  const data = getQuestionData(step);

  return (
    <section
      className="max-w-2xl mx-auto p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg backdrop-blur-md animate-fade-in"
      aria-labelledby="question-title"
    >
      {/* Header */}
      <header className="space-y-2 mb-6">
        <span className="text-[#8B5E3C] font-medium text-sm tracking-widest uppercase">
          {data.stepLabel}
        </span>
        <h2 id="question-title" className="text-2xl font-light text-[#1A1A1A] dark:text-gray-100">
          {data.question}
        </h2>
      </header>

      {/* Slider */}
      <div className="space-y-4">
        <label
          htmlFor="maxdiff-range"
          className="sr-only"
        >
          {data.minLabel} – {data.maxLabel}
        </label>
        <input
          id="maxdiff-range"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-[#E8E1D9] rounded-full appearance-none cursor-pointer accent-[#8B5E3C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C] transition-colors"
        />
        <div className="flex justify-between text-xs font-medium text-[#A39A92] uppercase tracking-tighter">
          <span>{data.minLabel}</span>
          <span>{data.maxLabel}</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex gap-4 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 border border-[#E8E1D9] rounded-xl hover:bg-[#F9F8F6] transition-colors font-medium text-[#6B6B6B] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C]"
        >
          Quay lại
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 py-3 bg-[#8B5E3C] text-white rounded-xl hover:bg-[#704B30] transition-all font-medium flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#8B5E3C]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Tiếp theo
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </nav>
    </section>
  );
};
