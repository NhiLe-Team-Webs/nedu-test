import React from 'react';
import { MapPin, BookOpen } from 'lucide-react';

interface ResultScreenProps {
  onRestart: () => void;
}

export const ResultScreen = ({ onRestart }: ResultScreenProps) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="space-y-2 text-center">
        <div className="inline-block px-4 py-1 bg-[#FDF1E9] text-[#8B5E3C] rounded-full text-xs font-bold tracking-widest uppercase mb-2">
          Kết quả chẩn đoán
        </div>
        <h2 className="text-3xl font-light text-[#1A1A1A]">
          Người Dẫn Dắt <span className="font-semibold italic">Đang Tạm Nghỉ</span>
        </h2>
      </div>

      <p className="text-[#6B6B6B] leading-relaxed text-center italic">
        "Linh thân mến, bạn có nội lực mạnh mẽ, nhưng sự tĩnh lặng bên trong đang bị quá tải. Lối sống hiện tại đang khiến tâm trí bạn nặng nề hơn mức cần thiết."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {/* Offline Recommend */}
        <div className="p-5 bg-[#F9F8F6] rounded-2xl border border-[#F0EBE5] space-y-3">
          <div className="flex items-center gap-2 text-[#8B5E3C]">
            <MapPin size={18} />
            <span className="font-semibold text-sm">Đề xuất Offline</span>
          </div>
          <h3 className="font-medium text-[#2D2D2D]">Retreat Chữa Lành 9 Ngày</h3>
          <p className="text-xs text-[#8B7E74] leading-normal">Kết hợp thiền động và thực dưỡng Macrobiotic tại Đà Lạt.</p>
          <button className="w-full py-2 bg-white border border-[#E8E1D9] rounded-xl text-sm font-medium hover:bg-[#8B5E3C] hover:text-white transition-all cursor-pointer">
            Tìm hiểu thêm
          </button>
        </div>

        {/* Online Recommend */}
        <div className="p-5 bg-[#F9F8F6] rounded-2xl border border-[#F0EBE5] space-y-3">
          <div className="flex items-center gap-2 text-[#8B5E3C]">
            <BookOpen size={18} />
            <span className="font-semibold text-sm">Học trực tuyến</span>
          </div>
          <h3 className="font-medium text-[#2D2D2D]">Khóa học "Là Chính Mình"</h3>
          <p className="text-xs text-[#8B7E74] leading-normal">Lộ trình 21 ngày tái cấu trúc EQ và nhận thức lãnh đạo.</p>
          <button className="w-full py-2 bg-[#2D2D2D] text-white rounded-xl text-sm font-medium hover:bg-black transition-all cursor-pointer">
            Mở khóa bài học
          </button>
        </div>
      </div>

      <div className="text-center pt-4">
        <button 
          onClick={onRestart}
          className="text-sm text-[#8B7E74] hover:text-[#8B5E3C] underline underline-offset-4 transition-colors cursor-pointer"
        >
          Thực hiện lại bài trắc nghiệm
        </button>
      </div>
    </div>
  );
};
