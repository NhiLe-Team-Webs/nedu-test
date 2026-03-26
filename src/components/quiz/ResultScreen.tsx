import React, { useState } from 'react';
import { MapPin, BookOpen, Mail } from 'lucide-react';
import { FollowUpModal } from './FollowUpModal';

interface ResultScreenProps {
  onRestart: () => void;
}

export const ResultScreen = ({ onRestart }: ResultScreenProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFollowUpSubmit = (data: any) => {
    console.log("Submit follow up:", data);
    // API logic mock
    setIsSuccess(true);
  };

  return (
    <>
      <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-28 md:pb-0">
        <div className="space-y-2 text-center mt-6 md:mt-0">
          <div className="inline-block px-4 py-1.5 bg-[#FDF1E9] text-[#8B5E3C] rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
            Kết quả chẩn đoán
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A]">
            Người Dẫn Dắt <br className="md:hidden" />
            <span className="font-semibold italic">Đang Tạm Nghỉ</span>
          </h2>
        </div>

        <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed text-center italic mt-6 px-2">
          "Linh thân mến, bạn có nội lực mạnh mẽ, nhưng sự tĩnh lặng bên trong đang bị quá tải. Lối sống hiện tại đang khiến tâm trí bạn nặng nề hơn mức cần thiết."
        </p>

        {/* Compact List cho đề xuất Offline & Online */}
        <div className="flex flex-col gap-3 pt-8 mt-auto md:mt-8">
          <div className="p-4 bg-[#F9F8F6] rounded-2xl border border-[#F0EBE5] flex items-center gap-4 hover:border-[#8B5E3C]/30 transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-white rounded-full text-[#8B5E3C] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <MapPin size={18} />
            </div>
            <div className="flex-1">
               <h3 className="font-semibold text-[#2D2D2D] text-sm tracking-tight">Retreat Chữa Lành 9 Ngày</h3>
               <p className="text-xs text-[#8B7E74] leading-relaxed mt-0.5">Thiền động & thực dưỡng tại Đà Lạt</p>
            </div>
          </div>

          <div className="p-4 bg-[#F9F8F6] rounded-2xl border border-[#F0EBE5] flex items-center gap-4 hover:border-[#8B5E3C]/30 transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-white rounded-full text-[#8B5E3C] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
               <BookOpen size={18} />
            </div>
            <div className="flex-1">
               <h3 className="font-semibold text-[#2D2D2D] text-sm tracking-tight">Khóa học "Là Chính Mình"</h3>
               <p className="text-xs text-[#8B7E74] leading-relaxed mt-0.5">21 ngày tái cấu trúc EQ & Nội lực</p>
            </div>
          </div>
        </div>

        {/* Nút reset chìm */}
        <div className="text-center pt-6 mb-2 md:mb-0">
           <button 
            onClick={onRestart}
            className="text-xs font-medium text-[#A39A92] hover:text-[#6B6B6B] transition-colors cursor-pointer py-2 underline underline-offset-4 decoration-transparent hover:decoration-[#A39A92]"
          >
            Làm lại từ đầu
          </button>
        </div>

        {/* 🔥 STICKY CTA BLOCK (Dính đáy lề màn hình Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 bg-gradient-to-t from-white via-white/95 to-transparent z-40 md:relative md:bg-transparent md:p-0 md:pt-8 md:mt-4 pointer-events-none">
          <div className="max-w-xl mx-auto pointer-events-auto">
            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#704B30] p-4 rounded-2xl shadow-xl shadow-[#8B5E3C]/25 flex items-center justify-between gap-4 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <div className="flex-1 text-left">
                  <h3 className="text-white font-semibold text-base">Phân tích chuyên sâu</h3>
                  <p className="text-white/80 text-xs mt-0.5 font-medium">Nhận kết quả chi tiết qua email</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                  <Mail size={18} className="drop-shadow-sm" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <FollowUpModal 
          onClose={() => {
            setShowModal(false);
            if(isSuccess) onRestart(); 
          }}
          onSubmit={handleFollowUpSubmit}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};
