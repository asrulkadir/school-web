"use client";

import Banner from "@/components/Banner";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const Facility = () => {
  const dummyData = [];

  for (let i = 0; i < 6; i++) {
    dummyData.push({
      title: `Fasilitas ${i + 1}`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, elit id aliquam ultricies, odio odio ultricies elit.`,
      image: `https://picsum.photos/200/200?random=${i + 1}`,
    });
  }

  return (
    <>
      <Banner title="Fasilitas Sekolah" />
      <section className="container mx-auto pb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container relative mx-auto">
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              <Card className="flex max-w-80 flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=1"
                  alt="Service 1"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Fasilitas 1</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
              <Card className="flex max-w-80 flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=2"
                  alt="Service 2"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Fasilitas 2</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id aliquam ultricies, odio odio
                  ultricies elit.
                </p>
              </Card>
              <Card className="flex max-w-80 flex-col items-center gap-4 rounded-lg p-4 shadow-lg">
                <Image
                  src="https://picsum.photos/200/200?random=3"
                  alt="Service 3"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">Fasilitas 3</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, elit id
                </p>
              </Card>
              {dummyData.map((item, index) => (
                <Card
                  key={index}
                  className="flex max-w-80 flex-col items-center gap-4 rounded-lg p-4 shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-center">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Facility;
