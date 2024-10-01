"use client";
import Banner from "@/components/Banner";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const Staff = () => {
  const dummyData = [];

  for (let i = 0; i < 6; i++) {
    dummyData.push({
      title: `Guru ${i + 1}`,
      role: `Role ${i + 1}`,
      image: `https://picsum.photos/200/200?random=${i + 1}`,
    });
  }
  return (
    <>
      <Banner title="Guru dan Staff" />
      <section className="container mx-auto pb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <Card className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg">
              <Image
                src="https://picsum.photos/200/200?random=1"
                alt="Service 1"
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold">Guru 1</h3>
              <p>Kepala Sekolah</p>
            </Card>
            <Card className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg">
              <Image
                src="https://picsum.photos/200/200?random=2"
                alt="Service 2"
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold">Guru 2</h3>
              <p>Guru IPS</p>
            </Card>
            <Card className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg">
              <Image
                src="https://picsum.photos/200/200?random=3"
                alt="Service 3"
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold">Guru 3</h3>
              <p>Guru IPA</p>
            </Card>
            {dummyData.map((data, index) => (
              <Card
                key={index}
                className="flex flex-col items-center gap-4 rounded-lg bg-black bg-opacity-50 p-4 shadow-lg"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold">{data.title}</h3>
                <p className="text-center">{data.role}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-card p-8">
        <h1 className="mb-5 text-center text-4xl">Struktur Organisasi</h1>
        <div className="container mx-auto">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Service 3"
            width={500}
            height={200}
            className="w-full rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Staff;
