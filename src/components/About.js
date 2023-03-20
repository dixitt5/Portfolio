import React from "react";
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-row xl:flex-col gap-24 ">
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
              <p className="mb-4 text-accent">Web Developer</p>
              <hr className="mb-8 opacity:5" />
              <p className="mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem magni ex, cum nulla aperiam autem quia aliquid
                blanditiis eaque recusandae! <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                debitis, voluptas maiores corporis exercitationem quae
                laboriosam adipisci modi impedit, similique atque. Quibusdam
                autem suscipit consequatur iusto architecto atque molestiae
                nulla!
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
