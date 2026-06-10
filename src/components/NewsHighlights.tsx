import React from 'react';
import { Newspaper, Zap, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'news' | 'highlight' | 'event';
  image?: string;
  featured?: boolean;
}

const NewsHighlights: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'SCSSA Conference 2025 Announced',
      description: 'Join us for the largest annual conference bringing together industry leaders and innovators.',
      date: 'June 15, 2025',
      category: 'event',
      featured: true,
      image: 'SCSSA-Logo2.jpeg'
    },
    {
      id: 2,
      title: 'New Partnership Program Launched',
      description: 'We are excited to announce strategic partnerships with leading organizations worldwide.',
      date: 'June 10, 2025',
      category: 'news',
      featured: true
    },
    {
      id: 3,
      title: 'Record Breaking Membership Growth',
      description: '50% increase in community members this quarter. Join our growing family!',
      date: 'June 5, 2025',
      category: 'highlight'
    },
    {
      id: 4,
      title: 'Webinar Series: Industry Trends 2025',
      description: 'Expert speakers discussing emerging technologies and market opportunities.',
      date: 'May 28, 2025',
      category: 'event'
    },
    {
      id: 5,
      title: 'Scholarship Program Expands',
      description: 'Increased funding for students in STEM fields. Apply now!',
      date: 'May 20, 2025',
      category: 'news'
    },
    {
      id: 6,
      title: 'Community Recognition Awards',
      description: 'Celebrating outstanding contributions from our members.',
      date: 'May 15, 2025',
      category: 'highlight'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-blue-100 text-blue-800';
      case 'event':
        return 'bg-purple-100 text-purple-800';
      case 'highlight':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'news':
        return <Newspaper size={16} />;
      case 'event':
        return <Zap size={16} />;
      case 'highlight':
        return <Zap size={16} />;
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and achievements from our community.
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {newsItems.filter(item => item.featured).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {item.image && (
                <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {getCategoryIcon(item.category)}
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock size={16} />
                    {item.date}
                  </span>
                  <ArrowRight size={20} className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.filter(item => !item.featured).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-purple-600"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                  {getCategoryIcon(item.category)}
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={14} />
                  {item.date}
                </span>
                <ArrowRight size={16} className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All News
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsHighlights;
