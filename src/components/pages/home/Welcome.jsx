import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        
        {/* Logo Circle */}
        <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
          <h1 className="text-4xl font-bold text-white">SRJ</h1>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide">
          Welcome to
        </h1>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
           SRJ GLOBAL TECHNOLOGY
        </h2>

        {/* Subtitle */}
       <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
  We Provide 
  <span className="text-purple-400 font-semibold"> Software Development</span>, 
  <span className="text-pink-400 font-semibold"> Web Solutions</span>, and 
  <span className="text-blue-400 font-semibold"> Digital Innovation</span> 
  to transform your ideas into powerful technology.
</p>

        {/* Loading Animation */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></span>
        </div>

        <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase">
          Loading Experience...
        </p>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}