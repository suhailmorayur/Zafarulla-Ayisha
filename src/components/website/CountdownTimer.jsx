import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * CountdownTimer
 * Live real-time countdown calculating Days, Hours, Minutes, Seconds
 * automatically from weddingConfig.weddingDate.
 */
export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(weddingConfig.weddingDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="relative p-6 md:p-10 rounded-[24px] border border-[#c59341]/40 bg-gradient-to-b from-[#06241b] to-[#041912] shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center">
        
        <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.35em] text-[#dfba73] mb-8 font-semibold">
          Counting Down To The Blessed Day
        </h3>

        {/* 4 Time Units Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-4 md:p-6 rounded-[18px] border border-[#dfba73]/30 bg-[#072d21]/60 shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]"
            >
              <div className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#fae29f] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-cormorant text-xs md:text-sm uppercase tracking-[0.25em] text-[#cbdad4] mt-2 font-medium">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
