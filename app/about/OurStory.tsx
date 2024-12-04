import React from "react";
import Image from "next/image";
import ourStory from "./about_images/image_ourStory_1.png";
import aboutUsImage from "./about_images/image_about_1.png";

const OurStory = () => {
  return (
    <main className="mt-7">
      <div className="w-[85%] mt-5 mb-7 mx-auto">
        <div className="border-2 border-primary rounded-lg md:rounded-3xl flex flex-col-reverse p-5 md:py-6 md:flex-row md:justify-evenly md:items-center">
          <div className="md:w-[45%]">
            <Image
              src={aboutUsImage}
              alt="image for the story part"
              className="rounded-lg md:rounded-xl"
            />
          </div>
          <div className="md:w-[40%]">
            <p className="font-bold text-20">
              Opaleye yellowtail snapper, velvet catfish, graveldiver banded
              killifish, Old World rivuline catalufa eagle ray Moorish idol.
            </p>
            <p className="text-18 pb-5 pt-3">
              Queen danio velvet catfish Sacramento blackfish, bullhead shark,
              Colorado squawfish Russian sturgeon clown triggerfish swamp-eel
              paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe
              eel armorhead catfish, moray eel silverside!
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <div className="mt-10">
            <h3 className="text-center font-bold text-primary text-35 pb-5">
              Our Story
            </h3>
            <div className=" md:rounded-3xl flex flex-col-reverse md:flex-row-reverse md:justify-evenly md:items-center mx-auto">
              <div className="md:w-[45%]">
                <Image
                  src={ourStory}
                  alt="image for the story part"
                  className="rounded-lg md:rounded-xl"
                />
              </div>
              <div className="md:w-[40%]">
                <p className="font-bold text-20">
                  Opaleye yellowtail snapper, velvet catfish, graveldiver banded
                  killifish, Old World rivuline catalufa eagle ray Moorish idol.
                </p>
                <p className="text-18 pb-5 pt-3">
                  Queen danio velvet catfish Sacramento blackfish, bullhead
                  shark, Colorado squawfish Russian sturgeon clown triggerfish
                  swamp-eel paradise fish. Hake cookie-cutter shark silver carp
                  hawkfish snipe eel armorhead catfish, moray eel silverside!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurStory;
