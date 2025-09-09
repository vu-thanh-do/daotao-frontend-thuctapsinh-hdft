"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center animate-pulse bg-[#0A0A0A] text-white">
      <div className="w-12 h-12 mb-4 rounded-full bg-gray-700 animate-spin" />
      <h2 className="text-2xl font-semibold mb-2">Loading...</h2>
      <p className="text-gray-500">Please wait while we load the page.</p>
    </div>
  );
} 