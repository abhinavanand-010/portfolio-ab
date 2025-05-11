import React, { useState } from "react";

import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Computer Science and Engineering",
      school: "KLE Technological University",
      mascot: "🎓",
      year: "2019-2021",
      achievements: ["CGPA: 8.45", "SIH 2024 Qualifiers"],
      skills: ["Operating Systems", "Computer Networking", "Algorithms", "Data Structures", "Machine Learning", "System Programming"],
      description:
        "Focused on core computer science subjects with emphasis on practical skills and scientific research methodologies. Also focused on development skills to turn ideas into code.",
    },
    {
      degree: "Higher Secondary Education (CBSE)",
      school: "Delhi Public School Ranchi",
      mascot: "📘",
      year: "2018-2020",
      achievements: ["Stream: Science"],
      skills: ["Literature", "Physics", "Chemistry", "Mathemetics", "Informatics Practices"],
      description:
        "Developed analytical and thinking skills with some hands-on Java and Python Programming",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Educational Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="flex items-center gap-2 text-lg text-gray-300">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="pl-3 text-sm italic text-gray-300 border-l-2 border-teal-500">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 text-sm text-teal-400 rounded-full bg-teal-500/10"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs text-blue-300 rounded bg-blue-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
