import React from "react";
import photo from "../assets/img/design.png";
import WalletComp from "./WalletComp";

function Hero() {

  
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-2xl text-accent mb-[22px] mt-[40px]">
              Hey, I'm Dixit 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-3xl lg:leading-[1.2] font-bold md:tracking-[2px]">
              I Write smart-contracts <br />& Design  Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I'm a blockchain developer who loves to create innovative and
              secure solutions for the digital world.
            </p>
            {/* <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              Mint NFT
            </button> */}
            <WalletComp/>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-[800px]">
            <img className="h-[800px]" src={photo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
