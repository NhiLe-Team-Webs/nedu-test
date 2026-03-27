import React, { useState } from 'react';
import { Mail, Calendar, Briefcase, ChevronRight, X, User } from 'lucide-react';

interface FollowUpModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export const FollowUpModal = ({ onClose, onSubmit }: FollowUpModalProps) => {
  const [formData, setFormData] = useState({
    email: '',
    dob: '',
    occupation: '',
    feeling: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

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

        <div className="p-8 space-y-6 max-h-[90vh] overflow-y-auto">
          <div className="text-center space-y-2 pr-6">
            <h3 className="text-xl font-medium text-[#1A1A1A] text-left">Bạn có đồng ý cho Nedu lưu thông tin dưới đây để tư vấn chương trình phù hợp hơn với bạn không?</h3>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <div className="relative">
                <input 
                  required
                  type="email" 
                  placeholder="an@gmail.com" 
                  className="w-full px-4 py-3.5 bg-white border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] transition-all text-[#2D2D2D] shadow-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#8B7E74]">Ngày sinh (dùng tự động cho Bát tự & Thần số)</label>
              <div className="relative">
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-3.5 bg-white border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] transition-all text-[#2D2D2D] shadow-sm appearance-none"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#8B7E74]">Công việc hiện tại</label>
              <div className="relative">
                <input 
                  required
                  type="text" 
                  placeholder="Marketing Manager" 
                  className="w-full px-4 py-3.5 bg-white border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] transition-all text-[#2D2D2D] shadow-sm"
                  value={formData.occupation}
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#8B7E74]">Điều bạn đang quan tâm</label>
              <div className="relative">
                <textarea 
                  required
                  rows={3}
                  placeholder="Mình đang cảm thấy..." 
                  className="w-full px-4 py-3.5 bg-white border border-[#F0EBE5] rounded-xl text-sm focus:outline-none focus:border-[#8B5E3C] transition-all text-[#2D2D2D] shadow-sm resize-none"
                  value={formData.feeling}
                  onChange={(e) => setFormData({...formData, feeling: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#8B5E3C] text-white rounded-xl font-medium hover:bg-[#704B30] transition-colors mt-4 shadow-md shadow-[#8B5E3C]/20 border border-[#704B30]/50 cursor-pointer"
            >
              Đồng ý & Tiếp tục
            </button>
            <p className="text-xs text-center text-[#8B7E74]">
              Thông tin của bạn được bảo mật và chỉ dùng để tư vấn.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};


