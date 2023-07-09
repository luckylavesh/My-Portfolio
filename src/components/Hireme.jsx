import React from "react";
import hireMe from "../assets/images/11.png";

const Hireme = () => {
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/lavesh-soni-161bb0200/", "_blank");
  };

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I'm available for swe and sde positions for intern and full time
            both.
          </p>
          <button className="btn-primary mt-10" onClick={openLinkedInProfile}>
            Connect With Me Here!
          </button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[25rem] h-80 lg:absolute bottom-2 -right-8 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
