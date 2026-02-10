import React from "react";
import { motion } from "framer-motion";
import { Github, Bot, Leaf, HeartPulse, Brain } from "lucide-react";

import marineImg from "../assets/marine.jpg";
import diabetesImg from "../assets/diabetes.png";
import nlpImg from "../assets/nlp.png";
import shopImg from "../assets/shopverse.png";
import trafficImg from "../assets/traffic.jpeg";
import womenImg from "../assets/women.png";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";


export function Projects() {

  
  const projects = [
    {
      title: "Marine Waste Detection & Tracking",
      image: marineImg,
      description:
        "Deep learning-based computer vision system for detecting and tracking marine waste using YOLO and DeepSORT, with Streamlit deployment and environmental impact analysis.",
      icon: Leaf,
      tech: ["Python","YOLOvX","Deep Learning","Computer Vision","DeepSORT","Streamlit"],
      gradient: "from-orange-400 to-red-500",
      github: "https://github.com/arefin25diu/Marine-Waste-Detection-and-Tracking-using-YOLO-and-DeepSORT",
    },
    {
      title: "Diabetes Prediction System",
      image: diabetesImg,
      description:
        "Predictive ML system to assess diabetes risk using medical and lifestyle data, emphasizing preprocessing, feature selection, and model evaluation",
      icon: HeartPulse,
      tech: ["Python","Scikit-learn","Machine Learning", "React.js", "Tailwind CSS","Data Analysis","EDA"],
      gradient: "from-green-400 to-blue-500",
      github: "https://github.com/arefin25diu/Diabetes-Prediction-",
    },

        {
      title: "ShopeVerse – E-commerce Website",
      image: shopImg,
      description:
        "Full-stack e-commerce website with product browsing, cart, and checkout features. Built for performance, usability, and a clean user experience."
,
      icon: Bot,
      tech: ["HTML","CSS","React.js","PHP","MySQL", "REST API","UI Design"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/arefin25diu/Shopverse-Your-Market",
    },

      {
      title: "Women Safety App",
      image: womenImg,
      description:
        "Mobile-based women safety app for quick emergency assistance. Sends instant alerts with real-time location sharing.",
      icon: Bot,
      tech: ["Android","Mobile Application Development","GPS","Emergency Alert System","Flutter", "Dart"],
      gradient: "from-cyan-400 to-purple-500",
      github: "https://github.com/arefin25diu/Women-Safety-App",
    },

      {
      title: "Smart Traffic Control System (IoT & Embedded)",
      image: trafficImg,
      description:
        "Arduino-powered IoT traffic control system with real-time signal automation. Optimized to improve traffic flow and minimize congestion.",
      icon: Bot,
      tech: ["Arduino","Embedded Systems","IoT","C/C++","Sensors","Automation"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/arefin25diu/Smart-Traffic-Control",
    },

    {
      title: "NLP-Based Vulnerable Content Detection",
      image: nlpImg,
      description:
        "NLP-based system for detecting vulnerable and sensitive content. Uses text preprocessing, TF-IDF, and supervised machine learning models.",
      icon: Brain,
      tech: ["Python","NLP","Text Classification","TF-IDF","Word Embeddings", "Bi-LSTM","Content Moderation"],
      gradient: "from-pink-400 to-rose-500",
      github: "https://github.com/arefin25diu/Vulnerable-Content-Detection",
    },

  ];


  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Selected AI, ML, NLP, and full-stack projects demonstrating real-world problem solving
          </p>
        </motion.div>


        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >

              {/* Equal Height Card */}
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 h-full flex flex-col overflow-hidden">

                {/* Image (Fixed & Uniform) */}
                <div className="aspect-[16/9] overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">

                  <CardHeader>

                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient}`}>
                        <project.icon className="w-6 h-6 text-white"/>
                      </div>

                      <Button asChild size="sm" variant="ghost">
                        <a href={project.github} target="_blank">
                          <Github size={16}/>
                        </a>
                      </Button>
                    </div>

                    <CardTitle className="text-white">
                      {project.title}
                    </CardTitle>

                    {/* Clamp keeps cards equal */}
                    <CardDescription className="text-gray-400 line-clamp-3">
                      {project.description}
                    </CardDescription>

                  </CardHeader>


                  {/* Bottom aligned tech tags */}
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                </div>

              </Card>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
