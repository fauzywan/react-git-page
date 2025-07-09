const Hero = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-col-reverse md:flex-row pt-30 md:pt-20 justify-evenly items-center bg-[var(--secondary)] text-[var(--primary)] px-4 py-8 gap-10"
    >
      <div className="rotate-0 md:-rotate-[20deg] relative md:top-20 w-[100%] max-w-[270px] bg-white px-5 py-5 rounded-[12px] shadow-lg">
        <img
          src="img/saya2.jpeg"
          className="w-full h-auto rounded-[12px] object-cover"
          alt="Iwan Fauzy"
        />
        <div className="text-center mt-2 flex flex-col gap-1">
          <h1 className="text-black font-bold text-xl md:text-2xl">
            Iwan Fauzy
          </h1>
          <p className="text-black font-light text-sm md:text-base">
            Front-end Engineering: Web & Android
          </p>
        </div>
      </div>
      <div className="profile-text w-full md:w-1/2 text-center md:text-left">
        <p className="text-2xl sm:text-3xl md:text-[2.5rem] leading-snug font-light tracking-wide">
          Yesterday ended <br />
          Today is yet unknown <br />
          <span className="font-bold">Let’s begin</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
