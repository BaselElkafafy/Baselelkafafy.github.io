import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-FSX55Q0Z1N";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-FSX55Q0Z1N");
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center">
          As a dedicated E-commerce Web Designer, Basel Elkafafy, I&rsquo;m fueled by the dynamic intersection of design
          innovation and user-centric functionality. Specializing in crafting visually captivating online shopping experiences,
          <br />
          <br />
          I navigate the intricate dance between aesthetics and seamless functionality.
          My commitment is to enhance the user journey,
          contributing to the success of online businesses through a harmonious blend of creativity and technical expertise.
        </p>
      </div>

      {/* Tidio widget code */}
      <div id="tidio-widget" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <script src="//code.tidio.co/8v1h2atdhknpivrlt5easnomhpzomzjn.js" async></script>
      </div>
    </section>
  );
};

export default About;
