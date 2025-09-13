import { motion } from "framer-motion";
import { BookOpen, Brain, BarChart } from "lucide-react";

const services = [
  {
    title: "Interview Preparation",
    icon: <BookOpen className="w-10 h-10 text-indigo-500" />,
    links: [
      { name: "Peer Mock Interviews (Exponent)", url: "https://exponent.com/practice" },
      { name: "Google Interview Warmup", url: "https://grow.google/interview-warmup" },
      { name: "Anonymous Mock Interviews (interviewing.io)", url: "https://interviewing.io" },
    ],
  },
  {
    title: "AI Question Bank",
    icon: <Brain className="w-10 h-10 text-green-500" />,
    links: [
      { name: "LeetCode (Free Tier)", url: "https://leetcode.com" },
      { name: "HackerRank", url: "https://www.hackerrank.com/" },
      { name: "Exercism (Free & Mentored)", url: "https://exercism.org/" },
    ],
  },
  {
    title: "Performance Analytics",
    icon: <BarChart className="w-10 h-10 text-pink-500" />,
    links: [
      { name: "ScreenApp Speech Analyzer (Free)", url: "https://screenapp.io/" },
      { name: "ELSA Speech Analyzer", url: "https://elsaspeak.com/" },
    ],
  },
];

export default function Services() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          🌟 Our Services
        </h1>
        <p className="text-lg text-gray-600">
          Explore AI-powered tools and resources to boost your interview preparation,
          enhance your skills, and track your progress.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center border hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h2>
            <ul className="space-y-3">
              {service.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
