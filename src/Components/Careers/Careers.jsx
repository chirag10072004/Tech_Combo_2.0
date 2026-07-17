import React, { useState } from "react";
import CareerForm from "./CareersForm";

import {
  FaReact,
  FaJava,
  FaCloud,
  FaPalette,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaPython,
  FaRobot,
  FaBug,
  FaMobileAlt,
  FaShieldAlt,
  FaDatabase,
  FaChartBar,
  FaLaravel,
  FaWordpress,
  FaGraduationCap,
} from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";
import { FiMapPin, FiClock } from "react-icons/fi";

const jobs = [
  {
    title: "React Developer",
    icon: <FaReact />,
    location: "Nagpur / Remote",
    type: "Full Time",
    experience: "0-2 Years",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "Java Developer",
    icon: <FaJava />,
    location: "Nagpur / Hybrid",
    type: "Full Time",
    experience: "1-3 Years",
    skills: ["Java", "Spring Boot", "MySQL", "Git"],
  },
  {
    title: "Next.js Developer",
    icon: <SiNextdotjs />,
    location: "Remote",
    type: "Full Time",
    experience: "0-2 Years",
    skills: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Cloud Engineer",
    icon: <FaCloud />,
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
{
  title: "DevOps Engineer",
  icon: <FaCloud />,
  location: "Remote",
  type: "Full Time",
  experience: "2+ Years",
  skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
},
{
  title: "UI/UX Designer",
  icon: <FaPalette />,
  location: "Remote",
  type: "Full Time",
  experience: "0-2 Years",
  skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
},
{
  title: "App Developer",
  icon: <FaMobileAlt />,
  location: "Remote",
  type: "Full Time",
  experience: "1-3 Years",
  skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
},
{
  title: "Database Manager",
  icon: <FaDatabase />,
  location: "Nagpur / Hybrid",
  type: "Full Time",
  experience: "2+ Years",
  skills: ["MySQL", "PostgreSQL", "MongoDB"],
},
];

const Careers = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  return (
    <>
      <section className="bg-slate-50 py-15">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">       
            <h1 className="text-5xl font-bold text-slate-900">
              Open Positions
            </h1>

            <p className="mt-4 text-slate-600">
              Join our growing team and build amazing software products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-7"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-green-600 flex items-center justify-center text-3xl mb-1">
                  {job.icon}
                </div>

                <h2 className="text-2xl font-bold text-slate-800">
                  {job.title}
                </h2>

                <div className="mt-4 space-y-2 text-gray-500">

                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <FiClock />
                    {job.type}
                  </div>

                  <p>{job.experience}</p>

                </div>

                <div className="flex flex-wrap gap-2 mt-5">

                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <button
                  onClick={() => {
                    setSelectedJob(job.title);
                    setShowForm(true);
                  }}
                  className="w-full mt-8 bg-green-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                >
                  Apply Now
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Popup */}

      {showForm && (
        <CareerForm
          job={selectedJob}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default Careers;