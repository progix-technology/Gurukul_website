import React from 'react';
import Container from '../common/Container';
import { INSTITUTION_INFO } from '../../data/institutionalData';

export const StatsSection = () => {
  const { stats } = INSTITUTION_INFO;

  return (
    <section className="relative -mt-6 sm:-mt-10 z-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-none p-5 sm:p-6 border border-[#C68A32]/40 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-center group"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C96B25] mb-1">
                {stat.value}
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#241B15] mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-[#241B15]/70 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
