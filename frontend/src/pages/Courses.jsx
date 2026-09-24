import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import CourseCard from '../components/courses/CourseCard';
import CourseDetailModal from '../components/courses/CourseDetailModal';
import CurriculumOverview from '../components/courses/CurriculumOverview';
import CallToAction from '../components/home/CallToAction';
import { COURSES_DATA } from '../data/coursesData';
import { BookOpen, Sparkles } from 'lucide-react';
import bannerBgImg from '../assets/img_2.jpeg';

export const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <SEO
        title="पाठ्यक्रम"
        description="श्री निःशुल्क गुरुकुल महाविद्यालय के पाठ्यक्रम: प्रथमा, पूर्व मध्यमा, उत्तर मध्यमा, शास्त्री (B.A.), आचार्य (M.A.) एवं उपदेशक प्रशिक्षण।"
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt="श्री निःशुल्क गुरुकुल महाविद्यालय पाठ्यक्रम"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Light Warm Vedic Overlay - letting the building shine through */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(36,27,21,0.55) 0%, rgba(36,27,21,0.35) 50%, rgba(36,27,21,0.70) 100%)',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gurukul-saffron/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-2 font-serif text-[#C68A32]">
            ॐ
          </div>
          <div className="inline-flex items-center px-4 py-1 rounded-none text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 bg-transparent text-[#F8F4EA] border border-[#C68A32] shadow-sm">
            <span>सम्पूर्णानन्द संस्कृत विश्वविद्यालय से मान्यता प्राप्त</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
            पाठ्यक्रम एवं उपाधियाँ
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            कक्षा 6 (प्रथमा) से स्नातकोत्तर (आचार्य / M.A.) तक संपूर्ण निःशुल्क आवासीय वैदिक एवं आधुनिक शिक्षा व्यवस्था
          </p>
        </Container>
      </section>

      {/* Overview */}
      <CurriculumOverview />

      {/* Courses List */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="उपलब्ध पाठ्यक्रम"
            title="सम्पूर्ण पाठ्यक्रम विवरण"
            subtitle="प्रत्येक पाठ्यक्रम की अवधि, पात्रता एवं मुख्य विषयों की विस्तृत रूपरेखा"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES_DATA.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onOpenDetails={setSelectedCourse}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      {/* CTA */}
      <CallToAction />
    </>
  );
};

export default Courses;
