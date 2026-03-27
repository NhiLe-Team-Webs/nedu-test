import type { PersonaRoute, Persona } from '@/types/assessment';

// ─── Persona Routing ───
export const PERSONA_ROUTES: PersonaRoute[] = [
  { label: "Sinh viên / Học sinh", persona_id: "mai", emoji: "🎓" },
  { label: "Mới đi làm 1–3 năm", persona_id: "ngoc", emoji: "🌱" },
  { label: "Nhân viên văn phòng / Corporate", persona_id: "minh", emoji: "🧭" },
  { label: "Freelancer / Tự kinh doanh (không du lịch)", persona_id: "ha", emoji: "🦋" },
  { label: "Digital Nomad / Creator / YouTuber", persona_id: "khanh", emoji: "🧳" },
  { label: "Quản lý / Chủ doanh nghiệp nhỏ", persona_id: "linh", emoji: "💼" },
  { label: "Phụ nữ / Mẹ đang cân bằng gia đình & sự nghiệp", persona_id: "van", emoji: "🌸" },
  { label: "Giáo viên / Công chức / Viên chức", persona_id: "thao", emoji: "🌾" },
  { label: "Lãnh đạo cấp cao / Doanh nhân", persona_id: "lan", emoji: "🏔️" },
];

// ─── All Personas ───
export const PERSONAS: Record<string, Persona> = {
  mai: {
    id: "mai",
    label: "Sinh viên / Gen Z",
    emoji: "🎓",
    color: "#1D9E75",
    maxdiff_instruction: "Trong mỗi nhóm bên dưới, hãy chọn điều bạn đang CẦN NHẤT và điều bạn CẦN ÍT NHẤT ngay lúc này.",
    problem_pool: [
      { id: "mai_p1", label: "Tìm ra mình thực sự muốn gì", description: "Xác định đam mê, giá trị sống và hướng đi phù hợp với bản thân" },
      { id: "mai_p2", label: "Ngừng so sánh bản thân với người khác", description: "Thoát khỏi vòng lặp so sánh mạng xã hội và áp lực đồng trang lứa" },
      { id: "mai_p3", label: "Xây dựng thói quen & kỷ luật bản thân", description: "Duy trì học tập và phát triển bản thân một cách bền vững" },
      { id: "mai_p4", label: "Quản lý cảm xúc khi áp lực cao", description: "Không bị cuốn vào lo âu, trầm cảm nhẹ khi thi cử hoặc deadline" },
      { id: "mai_p5", label: "Giao tiếp tự tin & tạo kết nối thật", description: "Không còn ngại ngùng, biết cách thể hiện bản thân và xây dựng quan hệ" },
      { id: "mai_p6", label: "Nạp lại năng lượng và tránh burnout", description: "Biết cách nghỉ ngơi đúng cách, không cảm thấy có lỗi khi dừng lại" },
      { id: "mai_p7", label: "Hiểu và chấp nhận cảm xúc tiêu cực", description: "Đối mặt với nỗi sợ, buồn, thất vọng mà không trốn tránh" },
      { id: "mai_p8", label: "Xây dựng hình ảnh bản thân lành mạnh", description: "Tự tin vào ngoại hình, năng lực và giá trị của bản thân" },
    ],
    sets: [
      { set_id: "mai_s1", set_label: "Nhóm 1", items: ["mai_p1", "mai_p2", "mai_p4", "mai_p6"] },
      { set_id: "mai_s2", set_label: "Nhóm 2", items: ["mai_p3", "mai_p5", "mai_p7", "mai_p8"] },
      { set_id: "mai_s3", set_label: "Nhóm 3", items: ["mai_p1", "mai_p3", "mai_p5", "mai_p7"] },
      { set_id: "mai_s4", set_label: "Nhóm 4", items: ["mai_p2", "mai_p4", "mai_p6", "mai_p8"] },
    ],
    course_mapping: [
      { triggered_by: ["mai_p1", "mai_p7", "mai_p8"], problem_theme: "Khủng hoảng bản sắc & tự nhận thức", recommended_course: "EQ Foundations — 21 ngày", course_type: "online", cta: "Bắt đầu miễn phí 7 ngày", urgency_message: "Đây là nền tảng cần xây trước tất cả mọi thứ khác." },
      { triggered_by: ["mai_p2", "mai_p5", "mai_p6"], problem_theme: "Áp lực xã hội & so sánh", recommended_course: "Cộng đồng Nedu Gen Z", course_type: "community", cta: "Tham gia cộng đồng ngay", urgency_message: "Bạn không cần đi con đường này một mình." },
      { triggered_by: ["mai_p3", "mai_p4"], problem_theme: "Kỷ luật bản thân & quản lý cảm xúc", recommended_course: "EQ Foundations — Module Kỷ Luật & Cảm Xúc", course_type: "online", cta: "Xem chi tiết chương trình", urgency_message: "Kỷ luật thật sự bắt đầu từ hiểu cảm xúc, không phải ý chí." },
    ],
  },

  ngoc: {
    id: "ngoc",
    label: "Mới đi làm / Entry level",
    emoji: "🌱",
    color: "#639922",
    maxdiff_instruction: "Trong mỗi nhóm bên dưới, hãy chọn vấn đề bạn đang CẦN GIẢI QUYẾT NHẤT và vấn đề ÍT CẤP BÁCH NHẤT với bạn.",
    problem_pool: [
      { id: "ngoc_p1", label: "Tìm hướng đi sự nghiệp rõ ràng", description: "Biết mình muốn trở thành ai và làm gì trong 3–5 năm tới" },
      { id: "ngoc_p2", label: "Hòa nhập môi trường làm việc mới", description: "Không còn cảm giác lạc lõng, biết cách đọc văn hóa công ty" },
      { id: "ngoc_p3", label: "Thoát khỏi áp lực so sánh với bạn cùng tuổi", description: "Bạn bè lương cao hơn, thăng tiến nhanh hơn — và bạn cảm thấy tụt hậu" },
      { id: "ngoc_p4", label: "Giao tiếp chuyên nghiệp & tự tin", description: "Trình bày ý kiến, làm việc nhóm, nói chuyện với cấp trên hiệu quả" },
      { id: "ngoc_p5", label: "Quản lý tài chính cá nhân từ đầu", description: "Chi tiêu thông minh, tiết kiệm và tạo nền tảng tài chính ổn định" },
      { id: "ngoc_p6", label: "Thoát khỏi cảm giác burnout sớm", description: "Không để công việc đầu tiên 'ăn mòn' năng lượng và nhiệt huyết" },
      { id: "ngoc_p7", label: "Xây dựng thói quen học tập liên tục", description: "Upskill và phát triển bản thân song song với công việc" },
      { id: "ngoc_p8", label: "Nhận diện và quản lý cảm xúc tại công sở", description: "Không bị cảm xúc kiểm soát khi đối mặt với phản hồi tiêu cực hay conflict" },
    ],
    sets: [
      { set_id: "ngoc_s1", set_label: "Nhóm 1", items: ["ngoc_p1", "ngoc_p2", "ngoc_p4", "ngoc_p6"] },
      { set_id: "ngoc_s2", set_label: "Nhóm 2", items: ["ngoc_p3", "ngoc_p5", "ngoc_p7", "ngoc_p8"] },
      { set_id: "ngoc_s3", set_label: "Nhóm 3", items: ["ngoc_p1", "ngoc_p3", "ngoc_p6", "ngoc_p8"] },
      { set_id: "ngoc_s4", set_label: "Nhóm 4", items: ["ngoc_p2", "ngoc_p4", "ngoc_p5", "ngoc_p7"] },
    ],
    course_mapping: [
      { triggered_by: ["ngoc_p1", "ngoc_p7"], problem_theme: "Định hướng sự nghiệp & phát triển bản thân", recommended_course: "Tư duy Linh hoạt — Career Edition", course_type: "online", cta: "Xem lộ trình ngay", urgency_message: "3 năm đầu đi làm định hình 80% sự nghiệp của bạn." },
      { triggered_by: ["ngoc_p2", "ngoc_p4", "ngoc_p8"], problem_theme: "EQ tại nơi làm việc", recommended_course: "Là Chính Mình — 21 ngày EQ", course_type: "online", cta: "Mở khóa ngay", urgency_message: "Kỹ năng mềm quyết định bạn có trụ lại và thăng tiến được không." },
      { triggered_by: ["ngoc_p3", "ngoc_p5", "ngoc_p6"], problem_theme: "Cân bằng tâm lý & tài chính", recommended_course: "EQ + Tài chính Cá nhân Bundle", course_type: "online", cta: "Xem bundle ưu đãi", urgency_message: "Tâm lý ổn định và tài chính rõ ràng — hai thứ cần song song." },
    ],
  },

  minh: {
    id: "minh",
    label: "Nhân viên văn phòng / Corporate",
    emoji: "🧭",
    color: "#378ADD",
    maxdiff_instruction: "Hãy chọn điều đang CẢN TRỞ bạn NHIỀU NHẤT và điều bạn cảm thấy ÍT BỨC THIẾT NHẤT hiện tại.",
    problem_pool: [
      { id: "minh_p1", label: "Tìm lại ý nghĩa và động lực đi làm", description: "Không còn cảm giác đang chạy theo lộ trình người khác vạch sẵn" },
      { id: "minh_p2", label: "Phát triển kỹ năng lãnh đạo bản thân", description: "Chủ động hơn, ra quyết định tốt hơn thay vì chờ được bảo" },
      { id: "minh_p3", label: "Quản lý cảm xúc trong môi trường áp lực", description: "Bình tĩnh xử lý conflict, feedback tiêu cực và deadline" },
      { id: "minh_p4", label: "Thoát khỏi cái bẫy 'ổn nhưng không hạnh phúc'", description: "Công việc tốt, lương ổn — nhưng sáng nào cũng nặng nề khi thức dậy" },
      { id: "minh_p5", label: "Xây dựng mối quan hệ sâu sắc hơn", description: "Kết nối thật sự với đồng nghiệp, bạn bè, người thân — không chỉ bề mặt" },
      { id: "minh_p6", label: "Lên kế hoạch chuyển hướng sự nghiệp", description: "Muốn thay đổi nhưng không biết bắt đầu từ đâu và có đủ can đảm không" },
      { id: "minh_p7", label: "Phục hồi năng lượng sau giờ làm", description: "Về nhà mà không còn sức, cuối tuần không thực sự nghỉ ngơi được" },
      { id: "minh_p8", label: "Hiểu rõ điểm mạnh và định vị bản thân", description: "Biết mình giỏi gì, phù hợp với loại công việc và môi trường nào" },
    ],
    sets: [
      { set_id: "minh_s1", set_label: "Nhóm 1", items: ["minh_p1", "minh_p4", "minh_p6", "minh_p8"] },
      { set_id: "minh_s2", set_label: "Nhóm 2", items: ["minh_p2", "minh_p3", "minh_p5", "minh_p7"] },
      { set_id: "minh_s3", set_label: "Nhóm 3", items: ["minh_p1", "minh_p2", "minh_p3", "minh_p7"] },
      { set_id: "minh_s4", set_label: "Nhóm 4", items: ["minh_p4", "minh_p5", "minh_p6", "minh_p8"] },
    ],
    course_mapping: [
      { triggered_by: ["minh_p1", "minh_p4", "minh_p8"], problem_theme: "Ý nghĩa sống & tự nhận thức", recommended_course: "Là Chính Mình — 21 ngày EQ", course_type: "online", cta: "Bắt đầu hành trình", urgency_message: "Bắt đầu từ bên trong — mọi thứ bên ngoài sẽ theo sau." },
      { triggered_by: ["minh_p2", "minh_p3", "minh_p5"], problem_theme: "Leadership & EQ nghề nghiệp", recommended_course: "Tư Duy Linh Hoạt & Nội Lực Tâm Lý", course_type: "online", cta: "Xem chương trình", urgency_message: "EQ là kỹ năng phân biệt người bình thường và người xuất sắc tại công sở." },
      { triggered_by: ["minh_p6", "minh_p7"], problem_theme: "Phục hồi & chuyển hướng", recommended_course: "Retreat Cuối Tuần — Tái Thiết Kế", course_type: "retreat", cta: "Xem lịch gần nhất", urgency_message: "Đôi khi bạn cần ra khỏi màn hình để thấy rõ cuộc sống của mình." },
    ],
  },

  ha: {
    id: "ha",
    label: "Freelancer / Tự kinh doanh",
    emoji: "🦋",
    color: "#D85A30",
    maxdiff_instruction: "Là người làm việc tự do, điều nào đang khiến bạn KHÓ CHỊU NHẤT và điều nào bạn thấy ÍT VẤN ĐỀ NHẤT?",
    problem_pool: [
      { id: "ha_p1", label: "Ổn định thu nhập và thoát khỏi lo lắng tài chính", description: "Không còn nỗi sợ 'tháng này không có project'" },
      { id: "ha_p2", label: "Thoát khỏi cảm giác cô đơn khi làm việc một mình", description: "Thiếu đồng nghiệp, thiếu kết nối, thiếu người cùng hành trình" },
      { id: "ha_p3", label: "Thiết lập ranh giới rõ ràng giữa làm việc và nghỉ ngơi", description: "Không tắt được máy, không dừng được dù đã hết giờ" },
      { id: "ha_p4", label: "Quản lý cảm xúc khi kinh doanh có biến động", description: "Tháng xấu ảnh hưởng cả tâm trạng lẫn quyết định" },
      { id: "ha_p5", label: "Xây dựng hệ thống làm việc hiệu quả hơn", description: "Có cấu trúc ngày làm việc, không bị lãng phí năng lượng" },
      { id: "ha_p6", label: "Phát triển bản thân song song với kinh doanh", description: "Không để bận rộn khiến mình ngừng học hỏi và tiến bộ" },
    ],
    sets: [
      { set_id: "ha_s1", set_label: "Nhóm 1", items: ["ha_p1", "ha_p2", "ha_p4", "ha_p5"] },
      { set_id: "ha_s2", set_label: "Nhóm 2", items: ["ha_p3", "ha_p4", "ha_p5", "ha_p6"] },
      { set_id: "ha_s3", set_label: "Nhóm 3", items: ["ha_p1", "ha_p2", "ha_p3", "ha_p6"] },
    ],
    course_mapping: [
      { triggered_by: ["ha_p1", "ha_p4"], problem_theme: "Tâm lý tài chính & EQ kinh doanh", recommended_course: "EQ cho Người Tự Kinh Doanh", course_type: "online", cta: "Khám phá chương trình", urgency_message: "Cảm xúc và tiền bạc của người freelance gắn liền nhau hơn bạn nghĩ." },
      { triggered_by: ["ha_p2", "ha_p6"], problem_theme: "Kết nối cộng đồng & phát triển", recommended_course: "Mastermind Freelancer Nedu", course_type: "community", cta: "Tham gia cộng đồng", urgency_message: "Một cộng đồng đúng người có thể thay đổi cả trajectory của bạn." },
      { triggered_by: ["ha_p3", "ha_p5"], problem_theme: "Hệ thống & ranh giới cá nhân", recommended_course: "Là Chính Mình — Module Năng Lượng & Ranh Giới", course_type: "online", cta: "Xem module", urgency_message: "Ranh giới lành mạnh không phải ích kỷ — đó là nền tảng để làm việc bền vững." },
    ],
  },

  khanh: {
    id: "khanh",
    label: "Digital Nomad / Creator / YouTuber",
    emoji: "🧳",
    color: "#0F6E56",
    maxdiff_instruction: "Dưới đây là các vấn đề phổ biến của người sống lifestyle digital nomad. Chọn điều đang IMPACT BẠN NHIỀU NHẤT và điều LEAST RELEVANT với bạn lúc này.",
    problem_pool: [
      { id: "khanh_p1", label: "Nervous system dysregulation từ lifestyle liên tục di chuyển", description: "Luôn stimulated nhưng khó thực sự relax — ngay cả khi nghỉ ngơi" },
      { id: "khanh_p2", label: "Thiếu consistency trong content và công việc", description: "Bắt đầu nhiều projects nhưng khó maintain momentum dài hạn" },
      { id: "khanh_p3", label: "Ranh giới mờ giữa identity và công việc sáng tạo", description: "Khi content không tốt, cảm thấy bản thân không tốt — khó tách biệt" },
      { id: "khanh_p4", label: "Kết nối sâu với người khác khó hơn tôi tưởng", description: "Nhiều kết nối bề mặt, ít quan hệ thật sự sâu sắc và lâu dài" },
      { id: "khanh_p5", label: "Emotional granularity thấp trong quyết định kinh doanh", description: "Cảm xúc ảnh hưởng đến business decisions nhiều hơn mức cần thiết" },
      { id: "khanh_p6", label: "Tìm thấy sự tĩnh lặng bên trong giữa lifestyle bận rộn", description: "Bên ngoài có vẻ ổn, nhưng bên trong chạy liên tục không dừng được" },
    ],
    sets: [
      { set_id: "khanh_s1", set_label: "Nhóm 1", items: ["khanh_p1", "khanh_p2", "khanh_p5", "khanh_p6"] },
      { set_id: "khanh_s2", set_label: "Nhóm 2", items: ["khanh_p3", "khanh_p4", "khanh_p5", "khanh_p6"] },
      { set_id: "khanh_s3", set_label: "Nhóm 3", items: ["khanh_p1", "khanh_p2", "khanh_p3", "khanh_p4"] },
    ],
    course_mapping: [
      { triggered_by: ["khanh_p1", "khanh_p6"], problem_theme: "Nervous system regulation & inner stillness", recommended_course: "Là Chính Mình — Signature Program", course_type: "signature", cta: "Xem chương trình đầy đủ →", urgency_message: "Khi nervous system được regulate, creativity và clarity tự nhiên xuất hiện." },
      { triggered_by: ["khanh_p2", "khanh_p3", "khanh_p5"], problem_theme: "EQ cho Creator & identity work", recommended_course: "1-on-1 Deep Dive — 4 buổi", course_type: "coaching", cta: "Đặt lịch khám phá →", urgency_message: "Một vài buổi coaching đúng thời điểm có thể unlock những gì bạn đang block." },
      { triggered_by: ["khanh_p4"], problem_theme: "Attachment & kết nối sâu", recommended_course: "Digital Nomad Retreat — Chiang Mai", course_type: "retreat", cta: "Xem lịch gần nhất →", urgency_message: "Đôi khi bạn cần một cộng đồng thật sự để nhớ rằng mình không đi một mình." },
    ],
  },

  linh: {
    id: "linh",
    label: "Quản lý / Chủ doanh nghiệp nhỏ",
    emoji: "💼",
    color: "#534AB7",
    maxdiff_instruction: "Với vai trò lãnh đạo, điều nào đang ĂN MÒN NĂNG LƯỢNG của bạn NHIỀU NHẤT và điều nào bạn đang HANDLE ĐƯỢC?",
    problem_pool: [
      { id: "linh_p1", label: "Tái tạo năng lượng sau những đợt kiệt sức kéo dài", description: "Burnout không phải lúc nào cũng thấy rõ — nhưng bạn biết mình đang cạn" },
      { id: "linh_p2", label: "Ra quyết định dưới áp lực mà không để cảm xúc chi phối", description: "Áp lực từ trên xuống, áp lực từ team — và tiếng nói bên trong mình" },
      { id: "linh_p3", label: "Xây dựng văn hóa team và giữ động lực cho đội ngũ", description: "Leader ổn định bên trong thì team mới ổn định bên ngoài" },
      { id: "linh_p4", label: "Tách bạch bản thân với vai trò lãnh đạo", description: "Không để công việc định nghĩa hoàn toàn con người và giá trị của mình" },
      { id: "linh_p5", label: "Tìm lại kết nối với chính mình và những điều quan trọng", description: "Bận rộn đến mức quên mất mình muốn gì ngoài công việc" },
      { id: "linh_p6", label: "Thiền và các phương pháp chữa lành phù hợp với lối sống bận rộn", description: "Không có thời gian cho retreat dài ngày — cần thứ gì đó thực tế hơn" },
    ],
    sets: [
      { set_id: "linh_s1", set_label: "Nhóm 1", items: ["linh_p1", "linh_p2", "linh_p4", "linh_p5"] },
      { set_id: "linh_s2", set_label: "Nhóm 2", items: ["linh_p3", "linh_p4", "linh_p5", "linh_p6"] },
      { set_id: "linh_s3", set_label: "Nhóm 3", items: ["linh_p1", "linh_p2", "linh_p3", "linh_p6"] },
    ],
    course_mapping: [
      { triggered_by: ["linh_p1", "linh_p5", "linh_p6"], problem_theme: "Phục hồi sâu & tái kết nối bản thân", recommended_course: "Retreat Chữa Lành 9 Ngày — Đà Lạt", course_type: "retreat", cta: "Đặt chỗ ngay", urgency_message: "9 ngày đầu tư cho bản thân để trở lại mạnh mẽ hơn trong 9 tháng tiếp theo." },
      { triggered_by: ["linh_p2", "linh_p3", "linh_p4"], problem_theme: "EQ lãnh đạo & ra quyết định", recommended_course: "Là Chính Mình — Leadership Edition", course_type: "online", cta: "Mở khóa bài học", urgency_message: "Leader hiểu bản thân thì mới lãnh đạo người khác hiệu quả được." },
    ],
  },

  van: {
    id: "van",
    label: "Phụ nữ / Mẹ đang cân bằng gia đình & sự nghiệp",
    emoji: "🌸",
    color: "#D4537E",
    maxdiff_instruction: "Là người đang gánh nhiều vai trò cùng lúc, điều nào đang NẶNG NỀ NHẤT với bạn và điều nào bạn đang COPE ĐƯỢC?",
    problem_pool: [
      { id: "van_p1", label: "Cho phép bản thân nhận — không chỉ cho đi", description: "Học cách nhận sự giúp đỡ, nghỉ ngơi mà không cảm thấy có lỗi" },
      { id: "van_p2", label: "Điều tiết cảm xúc trước mặt con cái", description: "Không để stress công việc ảnh hưởng đến cách mình đối xử với con" },
      { id: "van_p3", label: "Thoát khỏi cảm giác kiệt sức mãn tính", description: "Luôn mệt dù đã ngủ đủ giấc — không phải mệt thể xác mà mệt tâm lý" },
      { id: "van_p4", label: "Xây dựng bản sắc ngoài vai trò mẹ và nhân viên", description: "Tôi là ai ngoài những vai trò tôi đang đóng?" },
      { id: "van_p5", label: "Thiết lập ranh giới lành mạnh với gia đình và công việc", description: "Không nói có với tất cả mọi người trong khi nói không với bản thân" },
      { id: "van_p6", label: "Tìm lại niềm vui và sự háo hức trong cuộc sống", description: "Mọi thứ đang ổn — nhưng sao vẫn thấy thiếu thứ gì đó" },
    ],
    sets: [
      { set_id: "van_s1", set_label: "Nhóm 1", items: ["van_p1", "van_p2", "van_p3", "van_p5"] },
      { set_id: "van_s2", set_label: "Nhóm 2", items: ["van_p4", "van_p5", "van_p6", "van_p1"] },
      { set_id: "van_s3", set_label: "Nhóm 3", items: ["van_p2", "van_p3", "van_p4", "van_p6"] },
    ],
    course_mapping: [
      { triggered_by: ["van_p1", "van_p3", "van_p5"], problem_theme: "Ranh giới & tái tạo năng lượng", recommended_course: "Cân bằng Nội Tâm cho Mẹ", course_type: "online", cta: "Bắt đầu hôm nay", urgency_message: "Bạn không thể rót từ một chiếc cốc rỗng. Đây là cách nạp lại." },
      { triggered_by: ["van_p2", "van_p4", "van_p6"], problem_theme: "Tự nhận thức & bản sắc cá nhân", recommended_course: "Weekend Retreat cho Phụ Nữ", course_type: "retreat", cta: "Xem lịch gần nhất", urgency_message: "2 ngày không có ai cần bạn — chỉ có bạn và chính mình." },
    ],
  },

  thao: {
    id: "thao",
    label: "Giáo viên / Công chức / Viên chức",
    emoji: "🌾",
    color: "#BA7517",
    maxdiff_instruction: "Điều nào đang GIỮ BẠN LẠI nhiều nhất và điều nào bạn thấy ÍT KHẨN CẤP với mình lúc này?",
    problem_pool: [
      { id: "thao_p1", label: "Vượt qua nỗi sợ thay đổi và bước ra khỏi vùng an toàn", description: "Biết mình cần thay đổi nhưng sợ rủi ro, sợ người khác nhìn nhận" },
      { id: "thao_p2", label: "Tìm lại ý nghĩa và niềm vui trong công việc hiện tại", description: "Không nhất thiết phải rời đi — nhưng cần thấy ý nghĩa hơn" },
      { id: "thao_p3", label: "Xây dựng thu nhập thêm song song với công việc chính", description: "Tăng tự do tài chính mà không cần bỏ việc ngay" },
      { id: "thao_p4", label: "Kết nối với cộng đồng có cùng khát vọng phát triển", description: "Không còn cảm thấy mình 'khác biệt' hay đơn độc trong môi trường trì trệ" },
      { id: "thao_p5", label: "Hiểu rõ bản thân trước khi đưa ra quyết định lớn", description: "Quyết định thay đổi dựa trên hiểu biết về mình, không phải cảm xúc nhất thời" },
      { id: "thao_p6", label: "Học cách tiếp nhận ý kiến trái chiều và phản hồi", description: "Không phòng thủ hay bị tổn thương khi bị góp ý hay phê bình" },
    ],
    sets: [
      { set_id: "thao_s1", set_label: "Nhóm 1", items: ["thao_p1", "thao_p2", "thao_p4", "thao_p5"] },
      { set_id: "thao_s2", set_label: "Nhóm 2", items: ["thao_p3", "thao_p4", "thao_p5", "thao_p6"] },
      { set_id: "thao_s3", set_label: "Nhóm 3", items: ["thao_p1", "thao_p3", "thao_p2", "thao_p6"] },
    ],
    course_mapping: [
      { triggered_by: ["thao_p1", "thao_p5"], problem_theme: "Tự nhận thức & can đảm thay đổi", recommended_course: "Bắt Đầu Từ Bên Trong", course_type: "online", cta: "Xem chương trình", urgency_message: "Hiểu mình trước — can đảm sẽ đến sau." },
      { triggered_by: ["thao_p2", "thao_p6"], problem_theme: "Ý nghĩa công việc & EQ", recommended_course: "Là Chính Mình — 21 ngày EQ", course_type: "online", cta: "Bắt đầu hành trình", urgency_message: "Thay đổi bắt đầu từ cách bạn nhìn mình — không phải từ hoàn cảnh bên ngoài." },
      { triggered_by: ["thao_p3", "thao_p4"], problem_theme: "Cộng đồng & phát triển tài chính", recommended_course: "Cộng đồng Nedu Tỉnh Thành", course_type: "community", cta: "Tham gia miễn phí", urgency_message: "Người xung quanh ảnh hưởng đến bạn nhiều hơn bạn nghĩ — hãy chọn đúng cộng đồng." },
    ],
  },

  lan: {
    id: "lan",
    label: "Lãnh đạo cấp cao / Doanh nhân",
    emoji: "🏔️",
    color: "#5F5E5A",
    maxdiff_instruction: "Ở giai đoạn này của cuộc sống, điều nào đang CẦN ĐỘ SÂU NHẤT từ bạn và điều nào bạn cảm thấy ÍT BỨC BÁCH nhất?",
    problem_pool: [
      { id: "lan_p1", label: "Tìm lại ý nghĩa sâu hơn ngoài thành công vật chất", description: "Có tất cả — nhưng câu hỏi 'vậy thì sao?' vẫn xuất hiện" },
      { id: "lan_p2", label: "Xây dựng di sản và tác động lâu dài", description: "Không chỉ kinh doanh thành công mà còn để lại thứ gì đó có ý nghĩa" },
      { id: "lan_p3", label: "Tái thiết kế cuộc sống cho nửa hành trình còn lại", description: "Nhìn lại và thiết kế có chủ đích thay vì tiếp tục theo quán tính" },
      { id: "lan_p4", label: "Kết nối sâu sắc hơn với gia đình và những người thân yêu", description: "Thành công bên ngoài nhưng khoảng cách bên trong gia đình ngày càng xa" },
      { id: "lan_p5", label: "Phát triển đội ngũ kế thừa và buông bỏ kiểm soát", description: "Tin tưởng để người khác lãnh đạo — đó là việc khó nhất với nhiều CEO" },
      { id: "lan_p6", label: "Tìm không gian để thực sự nghỉ ngơi và phục hồi", description: "Không biết cách tắt máy thực sự — ngay cả trong kỳ nghỉ" },
    ],
    sets: [
      { set_id: "lan_s1", set_label: "Nhóm 1", items: ["lan_p1", "lan_p2", "lan_p3", "lan_p6"] },
      { set_id: "lan_s2", set_label: "Nhóm 2", items: ["lan_p4", "lan_p5", "lan_p6", "lan_p1"] },
      { set_id: "lan_s3", set_label: "Nhóm 3", items: ["lan_p2", "lan_p3", "lan_p4", "lan_p5"] },
    ],
    course_mapping: [
      { triggered_by: ["lan_p1", "lan_p2", "lan_p3"], problem_theme: "Ý nghĩa sống & tái thiết kế", recommended_course: "VIP Retreat 7 Ngày — Chuyển Hóa", course_type: "retreat", cta: "Đăng ký tư vấn riêng", urgency_message: "Ở một điểm nhất định, bạn không cần thêm kiến thức — bạn cần không gian để thấy rõ." },
      { triggered_by: ["lan_p4", "lan_p5", "lan_p6"], problem_theme: "Kết nối, buông bỏ & phục hồi sâu", recommended_course: "1-on-1 Executive Coaching — 12 buổi", course_type: "coaching", cta: "Xếp lịch khám phá", urgency_message: "Coaching không phải để fix bạn — mà để unlock những gì bạn đã biết nhưng chưa thấy." },
    ],
  },
};
