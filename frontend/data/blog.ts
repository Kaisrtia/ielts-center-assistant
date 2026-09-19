export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
}

export const BLOG_CATEGORIES = [
  "All",
  "IELTS Reading",
  "IELTS Listening",
  "IELTS Writing",
  "IELTS Speaking",
  "Others"
];

// Mock database
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Bí quyết đạt 8.0 IELTS Reading chỉ trong 3 tháng",
    slug: "bi-quyet-dat-8-0-ielts-reading",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop",
    category: "IELTS Reading",
    author: "Ms. Thảo",
    publishDate: "2024-03-15",
    readTime: "5 phút",
    excerpt: "Khám phá chiến thuật skimming và scanning hiệu quả nhất để tiết kiệm thời gian và tăng độ chính xác khi làm bài thi Reading."
  },
  {
    id: "2",
    title: "Làm thế nào để tránh bẫy trong IELTS Listening Part 3?",
    slug: "tranh-bay-ielts-listening-part-3",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    category: "IELTS Listening",
    author: "Ms. Thảo",
    publishDate: "2024-03-10",
    readTime: "4 phút",
    excerpt: "Part 3 luôn là nỗi ám ảnh với nhiều sĩ tử. Cùng phân tích các bẫy thường gặp và cách phân biệt thông tin gây nhiễu."
  },
  {
    id: "3",
    title: "Cấu trúc bài viết Task 2 đạt điểm 7.0+ (Kèm bài mẫu)",
    slug: "cau-truc-writing-task-2-band-7",
    coverImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    category: "IELTS Writing",
    author: "Mr. Minh",
    publishDate: "2024-03-05",
    readTime: "7 phút",
    excerpt: "Hướng dẫn chi tiết cách lập dàn ý, phát triển luận điểm và sử dụng từ vựng ăn điểm cho dạng bài Agree/Disagree."
  },
  {
    id: "4",
    title: "Top 10 Idioms thường dùng trong IELTS Speaking Part 1",
    slug: "top-10-idioms-ielts-speaking",
    coverImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    category: "IELTS Speaking",
    author: "Ms. Thảo",
    publishDate: "2024-02-28",
    readTime: "3 phút",
    excerpt: "Áp dụng ngay 10 thành ngữ này để ghi điểm tiêu chí Lexical Resource trong phần thi Speaking một cách tự nhiên nhất."
  },
  {
    id: "5",
    title: "Tài liệu tự học IELTS cho người mất gốc",
    slug: "tai-lieu-tu-hoc-ielts-mat-goc",
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    category: "Others",
    author: "Admin",
    publishDate: "2024-02-20",
    readTime: "6 phút",
    excerpt: "Tổng hợp các bộ sách ngữ pháp và từ vựng kinh điển giúp bạn xây dựng lại nền tảng tiếng Anh vững chắc."
  },
  {
    id: "6",
    title: "Phương pháp chép chính tả Dictation: Học sao cho đúng?",
    slug: "phuong-phap-chep-chinh-ta-dictation",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    category: "IELTS Listening",
    author: "Ms. Thảo",
    publishDate: "2024-02-15",
    readTime: "5 phút",
    excerpt: "Dictation là vũ khí bí mật giúp tăng cường kỹ năng nghe chi tiết, nhưng nếu áp dụng sai cách sẽ rất dễ nản."
  },
  {
    id: "7",
    title: "Lịch thi IELTS 2024 và những lưu ý khi đăng ký",
    slug: "lich-thi-ielts-2024",
    coverImage: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    category: "Others",
    author: "Admin",
    publishDate: "2024-02-05",
    readTime: "3 phút",
    excerpt: "Cập nhật lịch thi giấy và máy tính mới nhất từ BC và IDP. Lời khuyên chọn ngày thi phù hợp với lộ trình ôn tập."
  }
];

export async function getBlogPosts(query?: string, category?: string): Promise<BlogPost[]> {  
  let filtered = [...MOCK_BLOG_POSTS];
  
  if (category && category !== 'All') {
    filtered = filtered.filter(post => post.category === category);
  }
  
  if (query) {
    const lowercaseQuery = query.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) || 
      post.excerpt.toLowerCase().includes(lowercaseQuery)
    );
  }
  
  return filtered;
}
