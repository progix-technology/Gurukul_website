import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { COURSES_DATA } from '../../data/coursesData';

export const FeaturedCourses = () => {
  const featured = COURSES_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-[#F8F4EA] border-b border-[#C68A32]/30">
      <Container>
        <SectionHeading
          badge="पाठ्यक्रम"
          title="गुरुकुलीय पाठ्यक्रम एवं उपाधियाँ"
          subtitle="सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से मान्यता प्राप्त माध्यमिक, स्नातक एवं स्नातकोत्तर पाठ्यक्रम"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-none border border-[#C68A32]/40 p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Level badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-none text-xs font-bold bg-[#F2EBDA] text-[#C96B25] border border-[#C68A32]/30">
                    {course.duration}
                  </span>
                  <GraduationCap className="w-5 h-5 text-[#C96B25]" />
                </div>

                {/* Course Title */}
                <h3 className="font-serif font-bold text-lg text-[#241B15] mb-1 group-hover:text-[#C96B25] transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs font-bold text-[#C68A32] mb-3">
                  {course.level}
                </p>

                <p className="text-xs text-[#241B15]/80 leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Key subjects preview */}
                <div className="space-y-1.5 border-t border-[#C68A32]/20 pt-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C68A32]">
                    प्रमुख विषय
                  </h4>
                  {course.subjects.slice(0, 3).map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#241B15]">
                      <span className="w-1.5 h-1.5 bg-[#C96B25] flex-shrink-0" />
                      <span className="truncate">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-[#C68A32]/20 mt-4">
                <Link
                  to={`/courses#${course.id}`}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#C96B25] hover:text-[#B65A1A] transition-colors"
                >
                  <span>विस्तृत पाठ्यक्रम व पात्रता</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            to="/courses"
            variant="primary"
            size="lg"
            icon={BookOpen}
          >
            सभी पाठ्यक्रम एवं पात्रता नियम देखें
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
