import React from "react";
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 ">
          <img
            className="object-cover h-full w-[480px] md:mx-auto max-w-fit rounded-[12px]"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Dixit Tilaji
              </h2>
              <p className="mb-4 text-accent">Block-end Developer</p>
              <hr className="mb-8 opacity:5" />
              <p className="mb-8">
              As someone who likes to have fun with this technology. I love to play with new chains and tools, and experiment with different features and functionalities. I'm also a lifelong learner who enjoys learning new things about blockchain every day. I'm always open to new ideas and collaborations that can help me grow as a developer.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
