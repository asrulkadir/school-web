"use client";

import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";

const News = () => {
  const articles = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=1",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=2",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=3",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=4",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=5",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=6",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=7",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=8",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.",
      image: "https://picsum.photos/200/200?random=9",
    },
  ];
  return (
    <>
      <Banner title="Berita dan Artikel Sekolah" />
      <section className="container mx-auto pb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
            {articles.map((article, index) => (
              <BlogCard
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default News;
