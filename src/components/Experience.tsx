import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase } from "lucide-react";

export function Experience() {

  const [active, setActive] = useState<number | null>(null);

  const experiences = [
  {
    title: "Business Development Intern",
    org: "Youth School for Social Entrepreneurs (YSSE)",
    desc: "Supported business development through market research and partnership outreach, and analyzed project data and stakeholder feedback.",
    tags: ["Research", "Outreach", "Analytics"],
    link: "https://ysseglobal.org/"  
  },
  {
    title: "Project Associate",
    org: "DIU Data Science Club",
    desc: "Collaborated with peers to analyze real-life projects and assisted in organizing workshops, seminars, and hands-on sessions.",
    tags: ["Projects", "Workshops", "Teamwork"],
    link: "https://dslab.daffodilvarsity.edu.bd/club"
  },
  {
    title: "Artificial Intelligence Intern",
    org: "CodSoft",
    desc: "Worked on AI and data science tasks, gaining hands-on experience with machine learning models, real-world datasets, data preprocessing, and model evaluation.",
    tags: ["AI", "Python", "Machine Learning"],
    link: "https://codsoft.in/"
  },
  {
    title: "Organizing Member",
    org: "Hult Prize at Daffodil International University",
    desc: "Actively involved in organizing and managing events for the Hult Prize competition at DIU. Collaborated with team members on planning, coordination and execution.",
    tags: ["Leadership", "Events", "Coordination"],
    link: "https://www.hultprize.org"
  }
];



  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* ================= EXPERIENCE HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience <br></br><br></br>
          </h2>
        </motion.div>

{/* ================= GRID EXPERIENCE ================= */}

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">

  {experiences.map((exp, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="
        cursor-pointer
        bg-gradient-to-br from-gray-900 to-gray-800
        border border-gray-700
        rounded-xl p-8
        shadow-lg hover:shadow-purple-500/20
      "
    >
      <h3 className="text-xl font-semibold text-white">
        {exp.title}
      </h3>

      <p className="text-blue-400 mb-3">
        {exp.org}
      </p>

      <p className="text-gray-300">
        {exp.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {exp.tags.map((t, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={exp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-400 hover:text-blue-500 font-medium transition"
      >
        Visit Website
      </a>

    </motion.div>
  ))}

</div>

        <br/><br/><br/><br/><br/><br/>

        {/* ================= EDUCATION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Education
          </h2>

          <p className="text-gray-400 text-lg">
            Academic background and qualifications that shaped my technical foundation
          </p>
        </motion.div>

        {/* ================= EDUCATION TIMELINE ================= */}
        <div className="relative max-w-5xl mx-auto">

          {/* animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
          />

          {/* ITEM */}
          {[
            {
              year: "2022 – 2025",
              title: "B.Sc. in Computer Science & Engineering",
              org: "Daffodil International University",
              desc: "Focused on Machine Learning, Database Management Systems and Web engineering. Completed capstone projects on event booking platforms, heart disease prediction and sentiment classification using Python and NLP.",
              score: "CGPA: 3.53 / 4.00",
              color: "bg-blue-500"
            },
            {
              year: "2017 – 2019",
              title: "Higher Secondary Certificate (Science)",
              org: "Gazipur Cantonment College",
              desc: "Science group with strong analytical and problem-solving skills.",
              score: "GPA: 5.00 / 5.00",
              color: "bg-indigo-500"
            },
            {
              year: "2015 – 2017",
              title: "Secondary School Certificate (Science)",
              org: "Cantonment Board High School, Rajendrapur",
              desc: "Science group with high performance in Mathematics and General Science.",
              score: "GPA: 5.00 / 5.00",
              color: "bg-green-500"
            }
          ].map((edu, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-16 mb-12"
            >

              <div className={`absolute left-0 top-3 w-9 h-9 rounded-full ${edu.color} border-4 border-background`} />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur shadow hover:shadow-purple-500/20">

                <span className="inline-block text-sm text-blue-400">
                  {edu.year}
                </span>

                <h3 className="text-xl font-semibold text-white">
                  {edu.title}
                </h3>

                <p className="text-blue-400 mt-1">
                  {edu.org}
                </p>

                <p className="text-gray-400 mt-3">
                  {edu.desc}
                </p>

                <p className="text-gray-300 mt-2 font-medium">
                  {edu.score}
                </p>

              </div>
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
