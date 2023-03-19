import React from "react";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg-block">
            My Latest Work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            iusto earum reiciendis ipsa neque modi culpa impedit quod
            consequuntur ut?
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
