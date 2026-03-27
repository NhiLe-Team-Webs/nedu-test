import React, { useState } from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import { FollowUpModal } from './FollowUpModal';
import type { AssessmentResult, Persona } from '@/types/assessment';

interface ResultScreenProps {
  result: AssessmentResult;
  persona: Persona;
  onRestart: () => void;
}

const COURSE_TYPE_BADGE: Record<string, { label: string; bg: string; text: string }> = {
  online: { label: 'Online', bg: 'bg-[#1D9E75]/10', text: 'text-[#1D9E75]' },
  retreat: { label: 'Retreat', bg: 'bg-[#D85A30]/10', text: 'text-[#D85A30]' },
  community: { label: 'Cộng đồng', bg: 'bg-[#378ADD]/10', text: 'text-[#378ADD]' },
  coaching: { label: 'Coaching', bg: 'bg-[#534AB7]/10', text: 'text-[#534AB7]' },
  signature: { label: 'Signature', bg: 'bg-[#BA7517]/10', text: 'text-[#BA7517]' },
};

export const ResultScreen = ({ result, persona, onRestart }: ResultScreenProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFollowUpSubmit = (data: Record<string, string>) => {
    console.log("Submit follow up:", data);
    setIsSuccess(true);
  };

  return (
    <>
      <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-28 md:pb-0">

        {/* Header */}
        <div className="space-y-2 text-center mt-6 md:mt-0">
          <div className="inline-block px-4 py-1.5 bg-[#FDF1E9] text-[#8B5E3C] rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
            Kết quả
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-[#1A1A1A]">
            Nedu đã hiểu bạn hơn <br className="md:hidden" />
            <span className="font-semibold italic">một chút</span>
          </h2>
          <p className="text-sm text-[#8B7E74] flex items-center justify-center gap-1.5">
            <span>{persona.emoji}</span> {persona.label}
          </p>
          <p className="text-sm text-[#8B7E74] mt-3 max-w-sm mx-auto leading-relaxed px-4">
            Dựa trên những gì bạn chia sẻ, đây là những gì chúng tôi nghĩ bạn đang cần nhất:
          </p>
        </div>

        {/* Top problems */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xs font-semibold text-[#8B7E74] uppercase tracking-wider ml-1">
            Điều bạn đang cần nhất
          </h3>
          <div className="space-y-3">
            {result.top_problems.map((problem, i) => (
              <div
                key={problem.item_id}
                className="p-4 bg-[#F9F8F6] rounded-2xl border border-[#F0EBE5]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
                    style={{ backgroundColor: persona.color }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#2D2D2D] text-sm">{problem.label}</h4>
                    <p className="text-xs text-[#8B7E74] mt-1 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course recommendations */}
        <div className="mt-8 space-y-2">
          <h3 className="text-xs font-semibold text-[#8B7E74] uppercase tracking-wider ml-1">
            Chương trình được chọn riêng cho bạn
          </h3>
          <div className="space-y-3">
            {result.recommended_courses.map((course, i) => {
              const badge = COURSE_TYPE_BADGE[course.course_type] || COURSE_TYPE_BADGE.online;
              return (
                <div
                  key={i}
                  className="p-5 bg-white rounded-2xl border border-[#F0EBE5] hover:border-[#8B5E3C]/30 transition-colors cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>
                      {badge.label}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[#2D2D2D] text-base group-hover:text-[#8B5E3C] transition-colors">
                    {course.recommended_course}
                  </h4>
                  <p className="text-xs text-[#8B7E74] mt-1 leading-relaxed italic">
                    &ldquo;{course.urgency_message}&rdquo;
                  </p>
                  <button className="mt-3 text-sm font-semibold text-[#8B5E3C] flex items-center gap-1 group-hover:gap-2 transition-all">
                    {course.cta}
                    <ChevronRight size={14} />
                  </button>
                </div>
              );
            })}
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

        {/* 🔥 STICKY CTA BLOCK */}
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
