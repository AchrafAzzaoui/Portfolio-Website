import Typewriter from "typewriter-effect";
import profileImage from "../../assets/Profile_Picture.png";

export default function HeroSection() {
  const strings = [
    "Full Stack Developer",
    "Data Scientist",
    "Machine Learning Engineer",
  ];
  return (
    <section className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-between mt-4 py-6 gap-8 md:py-12 md:gap-10">
      <div className="w-full md:basis-[62.5%] flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-extrabold text-center text-dark-text-primary">
          I'm Achraf, a
        </h1>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-medium text-center text-dark-text-primary mt-6">
          <Typewriter
            onInit={(typewriter) => {
              strings.forEach((string) => {
                typewriter.typeString(string).pauseFor(800).deleteAll();
              });
              typewriter.start();
            }}
            options={{ loop: true }}
          />
        </h2>
      </div>
      <div className="w-full md:basis-[37.5%] flex flex-col items-center md:items-start">
        <div className="relative w-full h-96 md:h-80 group flex justify-center items-center">
          {/* Container for both elements */}
          <div className="relative">
            {/* Border with absolute offset */}
            <div
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-72 h-72 md:w-[21rem] md:h-[21rem] border-2 border-purple-200 rounded-xl 
        transition-transform duration-200 group-hover:translate-x-[0.175rem] group-hover:translate-y-[0.175rem]"
            />

            {/* Image container */}
            <div
              className="relative w-72 h-72 md:w-[21rem] md:h-[21rem] rounded-xl overflow-hidden transition-transform duration-200 
        group-hover:-translate-x-[0.175rem] group-hover:-translate-y-[0.175rem]"
            >
              <img
                src={profileImage}
                alt=""
                className="w-full h-full object-cover rounded-xl scale-150"
              />
              <div
                className="absolute inset-0 mix-blend-soft-light rounded-xl bg-purple-500/90 transition-colors duration-200 
          group-hover:bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
