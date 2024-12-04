import { Data } from "@/data/BranchData";

const Footer = () => {
  return (
    <section className="mt-auto">
      <h1 className="text-center text-secondary text-35 font-bold">
        Our Branch
      </h1>
      <main>
        <div className="bg-primary text-customWhite py-4 mt-2">
          <div className=" flex justify-center items-center md:justify-between flex-wrap w-[95%] mx-auto">
            {Data.map((value, index) => {
              return (
                <div
                  key={index}
                  className={` shadow-lg py-2 text-center w-[90%] md:w-[30%] sm:w-[45%]`}
                >
                  <h1 className="text-25 md:text-35  font-bold">
                    {value.name}
                  </h1>
                  <h1 className="text-18 md:text-20">{value.location}</h1>
                  <div className="flex justify-evenly items-center text-12">
                    <p>{value.time}</p>
                    <p>{value.phone}</p>
                  </div>
                  <p className="text-16 md:text-18 text-linkColor">
                    {value.googlemap}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <footer className="bg-secondary text-customWhite text-center py-5">
          <h5>All rights reserved &copy; Shaheen Uddin Ahmad</h5>
        </footer>
      </main>
    </section>
  );
};

export default Footer;
