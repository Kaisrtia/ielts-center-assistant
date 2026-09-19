export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-16 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4 font-serif">The English Academy.</div>
          <p className="font-light max-w-sm mb-6 leading-relaxed">
            Đồng hành cùng bạn trên con đường chinh phục tiếng Anh và vươn ra thế giới bằng phương pháp chuyên sâu.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all hover:-translate-y-1">Fb</a>
            <a href="#" className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all hover:-translate-y-1">Yt</a>
            <a href="#" className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all hover:-translate-y-1">Ig</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold mb-4 uppercase tracking-widest text-sm">Liên Hệ</h4>
          <ul className="space-y-3 font-light text-sm">
            <li><span className="font-medium">Hotline:</span> 1900 1234</li>
            <li><span className="font-medium">Email:</span> hi@academy.com</li>
            <li><span className="font-medium">Địa chỉ:</span> 123 Đường A, Quận 1, TP.HCM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold mb-4 uppercase tracking-widest text-sm">Liên Kết</h4>
          <ul className="space-y-3 font-light text-sm">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Khóa học</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Giảng viên</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Chính sách bảo mật</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 text-sm text-center font-light">
        © 2026 The English Academy. All rights reserved.
      </div>
    </footer>
  );
}
