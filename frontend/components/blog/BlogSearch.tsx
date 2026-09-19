"use client";

import { useEffect, useState, useRef } from "react";
import { Search, X } from "lucide-react";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  const [localQuery, setLocalQuery] = useState(value);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Sync external value changes to local state if needed
  useEffect(() => {
    setLocalQuery(value);
  }, [value]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Debounce the actual filter update by 300ms
    debounceTimer.current = setTimeout(() => {
      onChange(newQuery.trim());
    }, 300);
  };

  const clearSearch = () => {
    setLocalQuery("");
    onChange("");
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-zinc-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-12 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 shadow-sm transition-all text-lg font-medium"
        placeholder="Tìm kiếm bài viết, chủ đề..."
        value={localQuery}
        onChange={handleSearchChange}
      />
      {localQuery && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
