import React, { useEffect, useState, useRef } from "react";
import { Users, Briefcase, Award, Headphones, TrendingUp, Star, Globe, Zap } from "lucide-react";

const stats = [
  { 
    number: 850, 
    suffix: "+", 
    label: "Clients Worldwide", 
    icon: <Users />,
    description: "Trusted by businesses across 30+ countries",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 1252,
    suffix: "+",
    label: "Projects Completed",
    icon: <Briefcase />,
    description: "Delivered with 99.9% client satisfaction",
    color: "from-purple-500 to-pink-500"
  },
  { 
    number: 10, 
    suffix: "+", 
    label: "Years Experience", 
    icon: <Award />,
    description: "A decade of digital excellence",
    color: "from-yellow-500 to-orange-500"
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
    icon: <Headphones />,
    description: "Round-the-clock technical assistance",
    color: "from-green-500 to-emerald-500"
  },
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Start counter animation
          const interval = setInterval(() => {
            setCounts((prev) =>
              prev.map((count, i) => {
                const target = stats[i].number;
                if (count < target) {
                  return Math.min(count + Math.ceil(target / 50), target);
                }
                return count;
              })
            );
          }, 25);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* 🔥 Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070')",
        }}
      ></div>

      {/* 🔥 Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#1E1B4B]/90 to-[#0F172A]/95 -z-10"></div>

      {/* 🔥 Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#2563EB] opacity-15 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7C3AED] opacity-15 blur-3xl rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8] opacity-5 blur-3xl rounded-full"></div>

      {/* 🔥 Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section with Animation */}
        <div className="text-center mb-16 animate-fadeIn">
          {/* Small Badge */}
          <div className="inline-block mb-4">
            <span className="px-4 py-1 text-xs font-semibold tracking-wider text-[#38BDF8] bg-white/10 backdrop-blur-sm rounded-full border border-[#38BDF8]/30">
              📊 OUR IMPACT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#7C3AED] bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-lg">
            Delivering high-quality IT solutions with proven success and trusted
            by clients worldwide.
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 
              shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer
              animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`,
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Icon with Gradient */}
              <div
                className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl 
                bg-gradient-to-br ${item.color} text-white shadow-lg 
                group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                {React.cloneElement(item.icon, { size: 28, strokeWidth: 1.5 })}
              </div>

              {/* Number with Counter */}
              <div className="relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  {hasAnimated ? counts[index] : 0}
                  <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent ml-1`}>
                    {item.suffix}
                  </span>
                </h2>
                
                {/* Small trend indicator */}
                <div className="absolute -top-2 -right-2 bg-green-500/20 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs text-green-400">
                  ↑ +15%
                </div>
              </div>

              {/* Label */}
              <h3 className="text-gray-200 mt-3 font-semibold text-base md:text-lg">
                {item.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 mt-2 text-xs md:text-sm">
                {item.description}
              </p>

              {/* Animated Bottom Line */}
              <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-white/50 to-white/20 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>

              {/* Sparkle Effect on Hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeIn">
          <p className="text-gray-300 mb-4">
            🚀 Ready to be part of our success story?
          </p>
          <button className="group relative overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/50">
            <span className="relative z-10">Start Your Journey →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;