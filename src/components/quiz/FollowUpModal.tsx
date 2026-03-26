import React, { useState } from 'react';
import { Mail, User, Briefcase, Calendar, CheckCircle2, X } from 'lucide-react';

interface FollowUpModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
  isSuccess: boolean;
}

export const FollowUpModal = ({ onClose, onSubmit, isSuccess }: FollowUpModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    occupation: ''
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Nút đóng */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#F9F8F6] rounded-full text-[#A39A92] hover:text-[#2D2D2D] hover:bg-[#F0EBE5] transition-all z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          // Màn hình Thành công
          <div className="p-8 text-center space-y-6 pt-12">
            <div className="flex justify-center animate-in zoom-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-[#FDF1E9] rounded-full flex items-center justify-center text-[#8B5E3C]">
                <CheckCircle2 size={40} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-normal text-[#1A1A1A]">Đã gửi thành công!</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed px-2">
                Bài test chuyên sâu 15 câu kèm bảng phân tích đa chiều vừa được chuyển vào hòm thư của bạn.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-[#2D2D2D] text-white rounded-2xl font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer mt-4"
            >
              Trở về trang chính
            </button>
          </div>
        ) : (
          // Màn hình Form
          <div className="p-8 space-y-6">
            <div className="text-center space-y-2 pr-6">
              <h3 className="text-xl font-medium text-[#1A1A1A] text-left">Nhận thêm bài test?</h3>
              <p className="text-[#6B6B6B] text-sm text-left">
                Điền thông tin để Nedu gửi qua email hướng dẫn chi tiết cho chặng đường tiếp theo của bạn.
              </p>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData);
              }}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#8B7E74] ml-1 uppercase tracking-wider">Họ và tên</label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A39A92]" />
                  <input 
                    required
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F9F8F6] border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all text-[#2D2D2D] shadow-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#8B7E74] ml-1 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A39A92]" />
                  <input 
                    required
                    type="email" 
                    placeholder="hello@example.com" 
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F9F8F6] border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all text-[#2D2D2D] shadow-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#8B7E74] ml-1 uppercase tracking-wider">Tuổi</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A39A92]" />
                    <input 
                      required
                      type="number" 
                      placeholder="VD: 25" 
                      className="w-full pl-11 pr-3 py-3.5 bg-[#F9F8F6] border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all text-[#2D2D2D] shadow-sm"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#8B7E74] ml-1 uppercase tracking-wider">Nghề nghiệp</label>
                  <div className="relative">
                    <Briefcase size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A39A92]" />
                    <input 
                      required
                      type="text" 
                      placeholder="VD: IT" 
                      className="w-full pl-11 pr-3 py-3.5 bg-[#F9F8F6] border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all text-[#2D2D2D] shadow-sm"
                      value={formData.occupation}
                      onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-[#8B5E3C] text-white rounded-xl font-medium hover:bg-[#704B30] transition-colors mt-4 shadow-md shadow-[#8B5E3C]/20 border border-[#704B30]/50 cursor-pointer flex justify-center items-center gap-2"
              >
                Gửi bài test cho tôi
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
