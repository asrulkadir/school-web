"use client";

import Banner from "@/components/Banner";
import Lottie from "lottie-react";
import schoolAnimation from "@/assets/lottie/school-animation.json";
import visionAnimation from "@/assets/lottie/vision-animation.json";
import missionAnimation from "@/assets/lottie/mission-animation.json";
import { motion } from "framer-motion";

const Profile = () => {
  console.log("Profile");
  return (
    <>
      <Banner title="Profile Sekolah, Sejarah, Visi dan Misi" />
      <section className="mx-auto p-8">
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row-reverse items-center justify-between gap-8 p-5">
            <div className="w-full md:w-[60%]">
              <h2 className="text-4xl font-bold">Sejarah Sekolah</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac urna ac risus. Integer et libero nec purus lacinia fermentum.
                Integer ac sapien vel nunc scelerisque tincidunt, Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Pariatur, nemo
                quibusdam. Corporis expedita vitae vel atque quo quidem
                dignissimos ad eum. Assumenda pariatur fugiat adipisci maxime
                odit et blanditiis alias?
              </p>
            </div>
            <div className="hidden w-[40%] justify-center rounded-md rounded-bl-[250px] bg-primary md:flex">
              <Lottie animationData={schoolAnimation} loop={true} />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto bg-secondary p-8">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between gap-8 p-5">
            <div className="w-full md:w-[60%]">
              <h2 className="text-4xl font-bold text-accent-foreground">
                Visi
              </h2>
              <p className="text-accent-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac urna ac risus. Integer et libero nec purus lacinia fermentum.
                Integer ac sapien vel nunc scelerisque tincidunt, Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Pariatur, nemo
                quibusdam. Corporis expedita vitae vel atque quo quidem
                dignissimos ad eum. Assumenda pariatur fugiat adipisci maxime
                odit et blanditiis alias?
              </p>
            </div>
            <div className="hidden w-[40%] justify-center rounded-md rounded-br-[250px] bg-primary md:flex">
              <Lottie
                animationData={visionAnimation}
                loop={true}
                className="max-w-[300px]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto p-8">
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row-reverse items-center justify-between gap-8 p-5">
            <div className="w-full md:w-[60%]">
              <h2 className="text-4xl font-bold">Misi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac urna ac risus. Integer et libero nec purus lacinia fermentum.
                Integer ac sapien vel nunc scelerisque tincidunt, Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Pariatur, nemo
                quibusdam. Corporis expedita vitae vel atque quo quidem
                dignissimos ad eum. Assumenda pariatur fugiat adipisci maxime
                odit et blanditiis alias?
              </p>
            </div>
            <div className="hidden w-[40%] justify-center rounded-md rounded-bl-[250px] bg-primary md:flex">
              <Lottie
                animationData={missionAnimation}
                loop={true}
                className="max-w-[300px]"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Profile;
