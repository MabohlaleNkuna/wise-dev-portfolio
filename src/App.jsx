import React from "react";
import About from "./components/About-me";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // Import Experience
import SiteFooter from "./components/SiteFooter";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

const App = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Header />
      <Navigation />

      <main>
        <section id="about">
          <About onContactClick={handleContactClick} />
        </section>

        <section id="experience"> {/* New Experience Section */}
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default App;
