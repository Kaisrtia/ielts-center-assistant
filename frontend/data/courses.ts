export type CourseTargetScores = {
  input: string;
  output: string;
};

export type CourseSyllabusSection = {
  title: string; // e.g., 'Speaking', 'Listening', 'Reading', 'Writing'
  content: string[]; // List of points
};

export type CourseTuition = {
  offline: string;
  online: string;
  smallGroup: string;
};

export type Course = {
  slug: string;
  title: string;
  targetScores: CourseTargetScores;
  duration: string;
  tuition: CourseTuition;
  syllabus: CourseSyllabusSection[];
  testing: string[];
  audience: string;
};

export const courses: Course[] = [
  {
    slug: "beginner",
    title: "IELTS BEGINNER",
    targetScores: { input: "0", output: "3.5" },
    duration: "42 BUỔI (3.5 THÁNG)",
    tuition: {
      offline: "5.980.000 VNĐ",
      online: "7.200.000 VNĐ",
      smallGroup: "10.000.000 VNĐ"
    },
    syllabus: [
      {
        title: "Speaking",
        content: [
          "Luyện phát âm theo bảng IPA, nhấn âm, ngữ điệu.",
          "Luyện nói các câu cơ bản trong IELTS Speaking Part 1."
        ]
      },
      {
        title: "Listening",
        content: [
          "Nghe thông tin cơ bản: đánh vần tên, số điện thoại,...",
          "Luyện nghe - chép chính tả đục lỗ.",
          "Luyện nghe kết hợp qua Website chép chính tả."
        ]
      },
      {
        title: "Reading",
        content: [
          "Làm quen với các kỹ năng đọc hiểu cơ bản."
        ]
      },
      {
        title: "Writing & Grammar",
        content: [
          "Học các điểm ngữ pháp quan trọng trong bài thi IELTS gồm: 8 thì cơ bản, các loại từ, câu bị động, mệnh đề quan hệ, câu điều kiện, so sánh.",
          "Học từ vựng các chủ đề quen thuộc: thông tin cá nhân, sở thích, gia đình, quốc tịch, sức khỏe,...",
          "Học từ vựng qua App."
        ]
      }
    ],
    testing: [
      "Học viên làm bài tập với deadline theo ngày và nộp trên Sheet bài tập có kiểm tra đốc thúc 1 lần/tuần.",
      "Trong suốt quá trình học liên tục được làm Mini Test định kỳ bằng hình thức trực tiếp hoặc qua Web.",
      "1 bài kiểm tra cuối khóa."
    ],
    audience: "Phù hợp cho học viên mất gốc hoặc mới bắt đầu làm quen với Tiếng Anh học thuật."
  },
  {
    slug: "foundation",
    title: "IELTS FOUNDATION",
    targetScores: { input: "3.5", output: "4.5 - 5.0" },
    duration: "42 BUỔI (3.5 THÁNG)",
    tuition: {
      offline: "5.980.000 VNĐ",
      online: "7.200.000 VNĐ",
      smallGroup: "10.000.000 VNĐ"
    },
    syllabus: [
      {
        title: "Speaking",
        content: [
          "Part 1: Học cách triển khai các dạng câu hỏi, luyện trả lời các common và uncommon topics.",
          "Part 2: Học chiến thuật xử lý các dạng bài Part 2, giúp kéo dài thời gian nói.",
          "Cải thiện phản xạ. Brainstorm và sắp xếp ý tưởng, sửa phát âm, ngữ pháp để bài nói tự nhiên hơn."
        ]
      },
      {
        title: "Listening",
        content: [
          "Ôn lại bảng phát âm IPA.",
          "Học phương pháp luyện nghe các dạng IELTS Listening (Gap-filling, Maps, MCQs,...).",
          "Kết hợp luyện nghe - chép chính tả hàng tuần.",
          "Ôn tập từ vựng qua App học từ vựng trực quan."
        ]
      },
      {
        title: "Reading",
        content: [
          "Học phương pháp giải các dạng đề IELTS Reading Passage 1+2.",
          "Kết hợp luyện đề trên máy tính.",
          "Ôn tập từ vựng qua App học từ vựng trực quan."
        ]
      },
      {
        title: "Writing",
        content: [
          "Ôn tập lại các cấu trúc ngữ pháp nâng cao: câu bị động, mệnh đề quan hệ,...",
          "Luyện viết 4 dạng IELTS Writing Task 1, viết hoàn chỉnh 1 bài Writing Task 1.",
          "Học cách lên ý tưởng cho từng Body Paragraph của Task 2, luyện tập viết đoạn."
        ]
      }
    ],
    testing: [
      "Học viên làm bài tập với deadline theo ngày và nộp trên Sheet bài tập có kiểm tra đốc thúc 1 lần/tuần.",
      "Mock Test Speaking sau mỗi buổi học Speaking trên lớp. Tổng cộng 8 bài Mock Test 1-1 Speaking.",
      "Bài tập luyện nói với AI trên web hàng tuần.",
      "1 bài kiểm tra cuối khóa Full test 4 kỹ năng."
    ],
    audience: "Dành cho học viên đã có nền tảng tiếng Anh cơ bản, bắt đầu làm quen với các format của đề thi IELTS."
  },
  {
    slug: "preparation",
    title: "IELTS PREPARATION",
    targetScores: { input: "5.0", output: "5.5 - 6.0" },
    duration: "41 BUỔI (3.5 THÁNG)",
    tuition: {
      offline: "6.280.000 VNĐ",
      online: "7.500.000 VNĐ",
      smallGroup: "10.000.000 VNĐ"
    },
    syllabus: [
      {
        title: "Speaking",
        content: [
          "Part 1: Triển khai các dạng câu hỏi, common và uncommon topics.",
          "Part 2: Kỹ thuật xử lý 4 dạng: Person, Place, Object, Event.",
          "Part 3: Kỹ thuật xử lý câu hỏi ngắn gọn, súc tích.",
          "Tài liệu biên soạn riêng gồm các chủ đề thường gặp trong IELTS Speaking và Forecast theo quý."
        ]
      },
      {
        title: "Listening",
        content: [
          "Học phương pháp luyện nghe Full dạng IELTS Listening Part 1+2+3+4.",
          "Luyện tập nghe - chép chính tả hàng tuần.",
          "Ôn tập từ vựng qua App học từ vựng trực quan, luyện đề trên máy tính."
        ]
      },
      {
        title: "Reading",
        content: [
          "Học phương pháp giải đề Full dạng Passage 1+2+3.",
          "Ôn tập từ vựng qua App học từ vựng trực quan, luyện đề trên máy tính."
        ]
      },
      {
        title: "Writing",
        content: [
          "Luyện viết Full các dạng IELTS Writing Task 1 và 2 dạng Writing Task 2.",
          "Tổng cả khóa chấm chữa 12 bài Writing Task 1, 5 bài Writing Task 2. Hỗ trợ viết và chấm lại bài 1 lần."
        ]
      }
    ],
    testing: [
      "Làm bài tập deadline theo ngày, nộp trên Sheet có đốc thúc 1 lần/tuần.",
      "Mock Test Speaking sau mỗi buổi học. Tổng cộng 10 bài Mock Test Speaking 1-1.",
      "Bài tập luyện nói với AI trên web hàng tuần.",
      "1 bài kiểm tra cuối khóa Full test 4 kỹ năng."
    ],
    audience: "Dành cho học viên chuẩn bị thi hoặc cần nâng cao toàn diện cả 4 kỹ năng IELTS sát với đề thi thực tế."
  },
  {
    slug: "intensive",
    title: "IELTS INTENSIVE",
    targetScores: { input: "6.0", output: "6.0+ - 6.5+" },
    duration: "37 BUỔI (3 THÁNG)",
    tuition: {
      offline: "6.880.000 VNĐ",
      online: "8.500.000 VNĐ",
      smallGroup: "KHÔNG CÓ"
    },
    syllabus: [
      {
        title: "Speaking",
        content: [
          "Part 1: Luyện trả lời common và uncommon topics, luyện phản xạ, nói tự nhiên.",
          "Part 2: Học chiến thuật xử lý, kéo dài thời gian nói trong 2 phút với 4 dạng: Person, Place, Object, Event.",
          "Part 3: Tư duy chiến thuật trả lời câu hỏi theo dạng.",
          "Tài liệu: Bộ Forecast theo quý kết hợp các chủ đề thường gặp."
        ]
      },
      {
        title: "Listening",
        content: [
          "Luyện nghe Full dạng Part 1+2+3+4.",
          "Ôn tập từ vựng qua App, kết hợp luyện đề trên máy tính từ đề thi thật qua các quý."
        ]
      },
      {
        title: "Reading",
        content: [
          "Học phương pháp giải đề Full dạng Passage 1+2+3.",
          "Ôn tập từ vựng qua App, kết hợp luyện đề trên máy tính từ đề thi thật qua các quý."
        ]
      },
      {
        title: "Writing",
        content: [
          "Giai đoạn 1: Học cách viết Task 1 (5 dạng trong 6 Units) để đạt ít nhất 6.0, tổng chấm chữa 11 bài Task 1.",
          "Giai đoạn 2: Học cách viết Task 2 (5 dạng trong 6 Units) để đạt ít nhất 6.0, tổng chấm chữa 11 bài Task 2."
        ]
      }
    ],
    testing: [
      "Bài tập deadline theo ngày, kiểm tra đốc thúc 1 lần/tuần.",
      "Mock Test Speaking sau mỗi buổi học. Tổng cộng 12 bài Mock Test Speaking 1-1.",
      "Bài tập luyện nói với AI trên web hàng tuần.",
      "1 bài kiểm tra cuối khóa Full test 4 kỹ năng."
    ],
    audience: "Dành cho học viên đã có nền tảng vững, sẵn sàng học cường độ cao để sửa lỗi cá nhân hóa và đạt band cao."
  },
  {
    slug: "graduation",
    title: "IELTS GRADUATION",
    targetScores: { input: "6.5", output: "7.0+" },
    duration: "37 BUỔI (3 THÁNG)",
    tuition: {
      offline: "6.880.000 VNĐ",
      online: "8.500.000 VNĐ",
      smallGroup: "KHÔNG CÓ"
    },
    syllabus: [
      {
        title: "Speaking",
        content: [
          "Part 1: Luyện phản xạ, nói tự nhiên.",
          "Part 2: Chiến thuật story-telling, selecting features đảm bảo nói trong 2 phút với 4 dạng: Person, Place, Object, Event.",
          "Part 3: Tư duy chiến thuật trả lời câu hỏi theo dạng."
        ]
      },
      {
        title: "Listening",
        content: [
          "Luyện nghe Full dạng Part 1+2+3+4.",
          "Học từ vựng trên App Quizizz, luyện đề thi thật trên máy tính."
        ]
      },
      {
        title: "Reading",
        content: [
          "Luyện giải đề Full dạng Passage 1+2+3.",
          "Học từ vựng trên App Quizizz, luyện đề thi thật trên máy tính."
        ]
      },
      {
        title: "Writing",
        content: [
          "Giai đoạn 1: Ôn lại cách viết Task 1, học cách viết nâng band để đạt ít nhất 6.0+ cho Task 1, tổng chấm chữa 11 bài Task 1.",
          "Giai đoạn 2: Học cách viết nâng band để đạt ít nhất 6.0+ cho Task 2, tổng chấm chữa 11 bài Task 2."
        ]
      }
    ],
    testing: [
      "Bài tập deadline theo ngày, kiểm tra đốc thúc 1 lần/tuần.",
      "Mock Test Speaking sau mỗi buổi học. Tổng cộng 12 bài Mock Test Speaking 1-1.",
      "Bài tập luyện nói với AI trên web hàng tuần.",
      "1 bài kiểm tra cuối khóa Full test 4 kỹ năng."
    ],
    audience: "Dành cho học viên mục tiêu band cao, tập trung luyện đề thực tế và cải thiện band điểm từng kỹ năng chi tiết."
  }
];
