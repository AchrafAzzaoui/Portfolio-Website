import ExperienceSection from "../experience/ExperienceSection";
export default function AboutExperience() {
  return (
    <section
      className="flex flex-col items-center md:items-start md:flex-row gap-20 md:gap-36 mt-4 md:mt-12 px-4 py-6 md:px-20 md:py-12"
      id="about"
    >
      <div className="basis-[7/16] flex-1 flex flex-col gap-8 md:gap-6">
        <h2 className="text-4xl font-semibold text-dark-text-primary font-sans text-center">
          About Me
        </h2>
        <p className="text-dark-text-primary font-extrabold text-[0.85rem] leading-loose text-center md:text-left">
          Hey! 👋 Thanks for checking out my portfolio. I'm a sophomore at Rice
          University 🎓 studying Computer Science 💻 and Statistics 📊.
          <br />
          <br /> I'm passionate about building impactful software 🌟 and
          exploring the intersection of technology and society 🌐. In my free
          time, I love to read 📚 non-fiction and science-fiction books, and
          play soccer ⚽.
          <br />
          <br /> I'm always learning new technologies 🛠️ and have experience
          across the whole software development stack: Front-end technologies
          like React ⚛️, Tailwind 🎨, and CSS3 ✍️ Back-end technologies like
          Flask 🐍, Node.js 🛠️, and MongoDB 🗄️ Machine learning frameworks like
          PyTorch 🔥 and TensorFlow 🤖
          <br />
          <br /> Feel free to reach out to me at 📧 aa270@rice.edu or connect
          with me on LinkedIn 🤝 about any opportunities or collaborations on
          projects! 🚀
        </p>
      </div>
      <ExperienceSection />
    </section>
  );
}
