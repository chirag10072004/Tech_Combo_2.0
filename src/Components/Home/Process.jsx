import React from 'react'

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement Analysis',
      desc: 'We understand your business goals and gather requirements.',
    },
    {
      num: '02',
      title: 'Planning & Strategy',
      desc: 'We plan the architecture, tech stack and project roadmap.',
    },
    {
      num: '03',
      title: 'Design & Development',
      desc: 'Our team designs and develops with clean and efficient code.',
    },
    {
      num: '04',
      title: 'Testing & Quality Check',
      desc: 'We test rigorously to ensure reliability, security and performance.',
    },
    {
      num: '05',
      title: 'Deployment & Support',
      desc: 'We deploy and provide ongoing support and maintenance.',
    },
  ]

  return (
    <section id="process" className="relative py-24 bg-[#F8FAFC] text-gray-900 overflow-hidden">
      {/* Subtle light background details */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark-navy">
            Our Process
          </h2>
          <div className="w-12 h-1 bg-green-600 mx-auto rounded" />
          <p className="text-gray-600 max-w-xl mx-auto font-light text-sm sm:text-base">
            From design to launch, our systematic approach ensures quality and precision at every milestone.
          </p>
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Connector Line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-blue-100" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col items-center text-center group">
                
                {/* Step Circle */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-green-600 shadow-md text-green-800 text-sm font-bold tracking-wider transition-all duration-300 group-hover:bg-green-100 group-hover:text-black group-hover:scale-110">
                  {step.num}
                </div>

                {/* Card Container */}
                <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] group-hover:shadow-[0_15px_35px_rgba(37,99,235,0.06)] group-hover:-translate-y-1 transition-all duration-300 flex-grow">
                  <h3 className="text-base font-bold text-dark-navy mb-2 group-hover:text-green-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="md:hidden relative pl-8 space-y-12 before:content-[''] before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col text-left group">
              {/* Step Circle */}
              <div className="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-primary-blue text-primary-blue text-xs font-bold shadow-sm z-10">
                {step.num}
              </div>

              {/* Card */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-dark-navy mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process
