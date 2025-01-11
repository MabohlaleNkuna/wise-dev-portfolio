import React from "react";
import About from "./components/About-me";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; 
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import FeedbackAndGoals from "./components/FeedbackAndGoals"; 

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

        <section id="experience"> 
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="feedback-and-goals"> 
          <FeedbackAndGoals />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
