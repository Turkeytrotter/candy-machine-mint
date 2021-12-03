import React from "react";
import gifimg from "../Trotting Turkeys GIF.gif";
const About = () => {
  return (
    <div className="w-full about-bg ">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex self-center">
            <div>
              <h1 className="text-white text-3xl md:text-5xl font-normal text-left   pb-5">
                About
              </h1>
              <h1 className="text-white text-base md:text-lg font-normal text-left   pb-8">
                Trotting Turkeys is a 5,555 NFT Collection that aims to be the
                most charitable NFT project on the Solana blockchain. Our
                current goal is to provide 1,000,000 meals to the hungry from
                Thanksgiving through the Winter to Feeding America verified by
                the Giving Block on chain. Upon completion of our minting
                process, we will be launching the Giving DAO, the first ever DAO
                dedicated to supporting local charities that are members are
                familiar with and local to. 50% of our royalties will be
                allocated to the Giving DAO.
              </h1>
            </div>
          </div>
          <div className="">
            <img src={gifimg} alt="" className="w-full md:px-6 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
