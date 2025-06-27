"use client";

import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import SplitText from "@/components/landing/SplitText";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/landing/ScrollReveal";
import FeatureCard from "@/components/landing/FeatureCard";
import TiltedCard from "@/components/landing/TiltedCard";
import ContactUsForm from "@/components/landing/ContactUsForm";
import Masonry from "@/components/landing/Masonary";
import RotatingText from "@/components/landing/RotatingText";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { spring } from "motion/react";

const LandingPage = () => {
  return (
    <main className="mt-24 justify-center">
      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-950 tracking-wider flex gap-1"
          >
            <Award className="w-5 h-5" />
            Award Winning NGO
            <Award className="w-5 h-5" />
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SplitText
              text="Streamline Carbon Contributions with Integrity"
              className="text-6xl font-semibold max-w-3xl mx-auto text-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-center max-w-2xl mx-auto mt-2"
          >
            The platform for planning, managing and reporting every carbon
            contribution with ease and guaranteed authenticity.
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex gap-4"
        >
          <Button className="py-5 px-10 rounded-full">Get Started</Button>
          <Button variant="outline" className="py-5 px-10 rounded-full">
            See Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="p-[4px] rounded-xl bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-500 shadow-lg"
        >
          <div className="bg-white rounded-xl overflow-hidden">
            <Image
              src="/landing.png"
              alt="landing"
              className="rounded-2xl w-full h-auto block"
              width={1500}
              height={650}
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-40 flex flex-col items-center mb-5">
        <p>Our Partners</p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="flex flex-wrap justify-center items-center gap-10 py-6 opacity-80"
        >
          <Image src="/google.png" alt="Google" width={150} height={70} />
          <Image src="/microsoft.png" alt="Microsoft" width={220} height={70} />
          <Image src="/netflix.png" alt="Netflix" width={150} height={70} />
          <Image src="/amazon.png" alt="Amazon" width={180} height={70} />
        </motion.div>
      </section>

      <section className="flex flex-col items-center bg-white border-0 rounded-3xl">
        <div className="max-w-4xl my-[50vh] text-center px-4">
          <ScrollReveal containerClassName="h-[100vh]">
            Science is unambiguous: achieving net-zero requires carbon removal.
            And compliance is in forward motion.
          </ScrollReveal>
          <ScrollReveal containerClassName="h-[50vh]">
            Yet, carbon contributions persistently face exposure to greenwashing
            and are notoriously complex to navigate.
          </ScrollReveal>
          <ScrollReveal containerClassName="h-[20vh]">
            We&apos;re changing that.
          </ScrollReveal>
        </div>
      </section>

      <section className="mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="bg-white border-gray-100 px-2 py-0.5 drop-shadow-black/15 drop-shadow-xs rounded-xl"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="font-semibold text-5xl"
          >
            What we do...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-700 max-w-xl text-center"
          >
            All the digital solutions you need… in one agency We work with you
            from concept to launch, and beyond, bringing your ideas to life and
            driving measurable results.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{
            transition: { type: spring },
          }}
          className="my-20 flex gap-5"
        >
          <FeatureCard
            title="Easy File Transfer"
            subtitle="Send and request files from your team.
Collaborate with easy file sharing."
            image="/feature-graphic.png"
          />
          <FeatureCard
            title="Easy File Transfer"
            subtitle="Send and request files from your team.
Collaborate with easy file sharing."
            image="/feature-graphic.png"
          />
          <FeatureCard
            title="Easy File Transfer"
            subtitle="Send and request files from your team.
Collaborate with easy file sharing."
            image="/feature-graphic.png"
          />
        </motion.div>
      </section>

      <section className="mt-20 flex flex-col items-center bg-white inset-shadow-sm inset-shadow-amber-900/15 rounded-2xl">
        <div className="flex flex-col items-center gap-4 mt-30">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="bg-white border-gray-100 px-2 py-0.5 drop-shadow-black/15 drop-shadow-xs rounded-xl"
          >
            Who We Help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="font-semibold text-5xl flex gap-2 items-center"
          >
            We are for{" "}
            <RotatingText
              texts={["NGOs", "Students", "Children", "Everyone!"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-amber-400 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-700 max-w-xl text-center"
          >
            All the digital solutions you need… in one agency We work with you
            from concept to launch, and beyond, bringing your ideas to life and
            driving measurable results.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{
            transition: { type: spring },
          }}
          className="my-20 flex gap-10"
        >
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            captionText="Kendrick Lamar - GNX"
            altText="Kendrick Lamar - GNX Album Cover"
            rotateAmplitude={12}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center">
                Kendrick Lamar - GNX
              </p>
            }
          />
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            captionText="Kendrick Lamar - GNX"
            altText="Kendrick Lamar - GNX Album Cover"
            rotateAmplitude={12}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center">
                Kendrick Lamar - GNX
              </p>
            }
          />
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            captionText="Kendrick Lamar - GNX"
            altText="Kendrick Lamar - GNX Album Cover"
            rotateAmplitude={12}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center">
                Kendrick Lamar - GNX
              </p>
            }
          />
        </motion.div>
      </section>

      <section className="mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="font-semibold text-5xl"
          >
            Contact us Toll Free!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="text-slate-700 max-w-xl text-center"
          >
            Drop us a message or book a quick call. Whether it’s revamping a
            full-blown site or nurturing the kernel of an idea, we’re here to
            make it happen.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{
            transition: { type: spring },
          }}
          className="my-10"
        >
          <ContactUsForm />
        </motion.div>
      </section>

      <section className="mt-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-neutral-400 font-medium">
            700k+ People have been helped by us ✨
          </p>
          <h2 className="text-5xl font-semibold max-w-3xl text-center mb-15">
            Helping Lumers streamline their workflow and deliver faster 🚀
          </h2>
        </motion.div>
        <Masonry />
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px", once: true }}
        className="mt-20"
      >
        <Footer />
      </motion.section>
    </main>
  );
};

export default LandingPage;
