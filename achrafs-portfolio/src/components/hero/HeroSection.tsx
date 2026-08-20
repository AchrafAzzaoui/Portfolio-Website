import profileImage from "../../assets/Profile_Picture.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-between mt-4 py-6 gap-8 md:py-12 md:gap-10"
    >
      <div className="w-full md:basis-[62.5%] flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-extrabold text-center md:text-left text-fg leading-tight">
          I'm Achraf, a software engineer.
        </h1>
        <p className="text-xl md:text-2xl xl:text-3xl font-sans font-medium text-center md:text-left text-fg-secondary mt-6">
          CS senior at Rice. SWE intern at Amazon, previously @ LinkedIn.
        </p>
      </div>
      <div className="w-full md:basis-[37.5%] flex flex-col items-center md:items-start">
        <div className="relative w-full h-96 md:h-80 group flex justify-center items-center">
          {/* Container for both elements */}
          <div className="relative">
            {/* Border with absolute offset */}
            <div
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-72 h-72 md:w-[21rem] md:h-[21rem] border-2 border-accent-tint rounded-xl 
        transition-transform duration-200 group-hover:translate-x-[0.175rem] group-hover:translate-y-[0.175rem]"
            />

            {/* Image container */}
            <div
              className="relative w-72 h-72 md:w-[21rem] md:h-[21rem] rounded-xl overflow-hidden transition-transform duration-200 
        group-hover:-translate-x-[0.175rem] group-hover:-translate-y-[0.175rem]"
            >
              <img
                src={profileImage}
                alt="Achraf Azzaoui"
                className="w-full h-full object-cover rounded-xl scale-150"
              />
              <div
                className="absolute inset-0 mix-blend-soft-light rounded-xl bg-accent/90 transition-colors duration-200 
          group-hover:bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
