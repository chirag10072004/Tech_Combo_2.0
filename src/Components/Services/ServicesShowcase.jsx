import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
const aiImage = '/assets/services/AI_IMAGE.jpg';
const appDevelopmentImg = '/assets/services/APP_D.jpg';
const cloudImg = '/assets/services/Cloud.png';
const customSoftwareImg = '/assets/services/Custom_S_D.jpg';
const cyberSecurityImg = '/assets/services/Cyber_S.png';
const webDevelopmentImg = '/assets/services/Web_D.jpg';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ServicesShowcase = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Web Development',
      image: webDevelopmentImg,
      desc: 'We build fast, secure, and fully responsive websites and web applications...',
      features: [
        'Responsive layouts for all devices',
        'SEO-friendly structure & semantic HTML',
        'Headless CMS & Single Page Applications',
        'Highly optimized fast load speeds'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      image: cloudImg,
      desc: 'Deploy your systems on robust and secure cloud networks...',
      features: [
        'AWS, GCP & Azure cloud setup',
        'Automated backups & disaster recovery',
        'Load balancing & auto-scaling strategies',
        'Cost optimization & performance tuning'
      ]
    },
    {
      id: 3,
      title: 'App Development',
      image: appDevelopmentImg,
      desc: 'Deliver feature-rich and intuitive mobile applications...',
      features: [
        'Native iOS & Android deployment',
        'React Native & hybrid app development',
        'Offline-first synchronization systems',
        'App store compliance & publishing'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Services',
      image: cyberSecurityImg,
      desc: 'Safeguard your digital assets and customer data...',
      features: [
        'Vulnerability assessments & pen testing',
        'Data encryption & secure protocol audits',
        'Compliance alignments (GDPR, ISO, HIPAA)',
        '24/7 incident response readiness'
      ]
    },
    {
      id: 5,
      title: 'Custom Software Development',
      image: customSoftwareImg,
      desc: 'Tailor-made software applications engineered from scratch...',
      features: [
        'Custom workflow automation tools',
        'Third-party API & CRM integrations',
        'Legacy application modernization',
        'Scalable database schema design'
      ]
    },
    {
      id: 6,
      title: 'AI Solutions',
      image: aiImage,
      desc: 'Build intelligent AI-powered applications with automation, analytics, and machine learning.',
      features: [
        'Machine Learning Models',
        'AI Chatbots & Assistants',
        'Predictive Analytics',
        'Business Process Automation'
      ]
    }
  ];

  return (
    <section id="services-showcase" className="relative py-24 bg-[#F8FAFC]">
      {/* Background gradients for SaaS aesthetics */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >

            <div className="w-8 h-[2px] bg-green-600 mt-2 rounded" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#071329]"
          >
            Services We Provide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base font-normal"
          >
            Explore our professional services designed to digitize and expand your business operations.
          </motion.p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-green-600 !w-8',
              bulletClass: 'swiper-pagination-bullet !bg-slate-300 transition-all duration-300 !w-2.5 !h-2.5'
            }}
            spaceBetween={40}
            slidesPerView={1}
            className="services-swiper rounded-[24px] bg-white border border-slate-100/80 shadow-[0_12px_40px_rgba(0,0,0,0.02)] p-6 sm:p-10 lg:p-12"
          >
            {servicesList.map((service) => (
              <SwiperSlide key={service.id} className="pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-4 sm:px-12 lg:px-16">

                  {/* Left Column: Text Information */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#071329]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-slate-600 text-sm">
                          <span className="flex-shrink-0 mt-0.5 p-0.5 rounded-full bg-blue-50 text-green-600">
                            <FiCheck className="h-3.5 w-3.5" />
                          </span>
                          <span className="font-light leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button inside Slide */}
                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-green-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                      >
                        <span>Request Service</span>
                        <FiArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Image Presentation (service image inside Widescreen Browser Mockup) */}
                  <div className="lg:col-span-5 flex justify-center relative">
                    {/* Browser Mockup Frame */}
                    <div className="relative w-full max-w-[440px] rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(7,19,41,0.08)] border border-slate-200/80 bg-white flex flex-col group">
                      {/* Browser Header with premium macOS buttons and URL bar */}
                      <div className="w-full bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center">
                        <div className="flex space-x-1.5 absolute">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex-grow flex justify-center">
                          
                        </div>
                      </div>
                      {/* Image Content (using modern widescreen aspect ratio & object-top alignment) */}
                      <div className="relative aspect-[1.5] w-full overflow-hidden bg-slate-50">
                        <img
                          src={service.image}
                          alt={`${service.title} illustration`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-green-600/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Styled bullets pagination configuration */}
      <style>{`
        .services-swiper .swiper-pagination-bullets {
          bottom: 24px !important;
        }
        .services-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1 !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background-color: #2563EB !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>

    </section>
  )
}

export default ServicesShowcase
