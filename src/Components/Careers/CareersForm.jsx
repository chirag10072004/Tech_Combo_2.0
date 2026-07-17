import React, { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { FiUpload, FiBriefcase, FiUser, FiMail, FiPhone, FiLink, FiMessageSquare, FiLoader } from "react-icons/fi";

const CareerForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    message: "",
  });

  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let resumeBase64 = null;
    if (resumeFile) {
      try {
        const getBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });
        };
        resumeBase64 = await getBase64(resumeFile);
      } catch (err) {
        console.error("Error reading file:", err);
        alert("Failed to read resume file. Please try again.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          portfolio: formData.portfolio || "N/A",
          message: formData.message,
          resume: resumeBase64,
          resumeName: resumeName
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        alert(result.message || "Submission failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex justify-center items-center z-50 px-5 transition-all duration-300">
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl text-slate-800 transform transition-all duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xl text-slate-400 hover:text-red-500 hover:rotate-90 transition-all duration-200 cursor-pointer"
        >
          <FaTimes />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                Apply for <span className="text-green-600">{job}</span>
              </h2>
              <p className="text-slate-500 mt-1.5 text-sm font-medium">
                Fill out the application form below and our team will get in touch with you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiUser className="text-lg" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiMail className="text-lg" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                    />
                  </div>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiPhone className="text-lg" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Experience Level *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiBriefcase className="text-lg" />
                    </div>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 bg-white transition text-sm font-normal appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your experience</option>
                      <option value="entry">Entry Level (0-1 year)</option>
                      <option value="mid">Mid Level (1-3 years)</option>
                      <option value="senior">Senior Level (3-5 years)</option>
                      <option value="lead">Lead / Manager (5+ years)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Portfolio / LinkedIn URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Portfolio or LinkedIn Profile (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <FiLink className="text-lg" />
                  </div>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                  />
                </div>
              </div>

              {/* Cover Letter / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Cover Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-4 text-slate-400 pointer-events-none">
                    <FiMessageSquare className="text-lg" />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us why you are a great fit for this role..."
                    className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal resize-none"
                  />
                </div>
              </div>

              {/* Custom Resume Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Upload Resume *
                </label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-blue-500 hover:bg-blue-50/20 transition-all duration-200 group cursor-pointer">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-green-600 flex items-center justify-center transition">
                      <FiUpload className="text-lg" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700">
                      {resumeName ? (
                        <span className="text-green-600">{resumeName}</span>
                      ) : (
                        <>
                          <span className="text-green-600">Click to upload</span> or drag and drop
                        </>
                      )}
                    </p>
                    <p className="text-[10px] text-slate-400">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3.5 rounded-xl font-bold transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-600/25 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin text-lg" />
                    Submitting Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-5 animate-fadeIn">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-5xl shadow-inner shadow-green-100">
              <FaCheckCircle className="animate-scaleUp" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900">Application Submitted!</h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm">
                Thank you for applying. We have received your resume and details for the <strong className="text-slate-800">{job}</strong> position, and we will get back to you shortly.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition duration-200 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CareerForm;