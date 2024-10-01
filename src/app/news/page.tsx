"use client";

import Banner from "@/components/Banner";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const News = () => {
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
            <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
              <Image
                src="https://picsum.photos/200/200?random=1"
                alt="Service 1"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">Berita 1</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </Card>
            <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
              <Image
                src="https://picsum.photos/200/200?random=2"
                alt="Service 2"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">Berita 2</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </Card>
            <Card className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
              <Image
                src="https://picsum.photos/200/200?random=3"
                alt="Service 3"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">Berita 3</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ultricies, elit id aliquam ultricies, odio odio ultricies elit.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default News;
