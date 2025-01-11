import React from "react";

const FeedbackAndGoals = () => {
  return (
    <section className="feedback-container">
      <h1 className="heading">Feedback & Post-Program Goals</h1>

      <div className="section">
        <h2 className="sub-heading">Facilitator Feedback</h2>
        <p className="text">
          "The facilitator has provided insightful guidance throughout the program, 
          offering both constructive feedback and encouragement."
        </p>
      </div>

      <div className="section">
        <h2 className="sub-heading">Self-Reflection</h2>
        <p className="text">
          "I have grown immensely as a developer during this program. I have gained a deeper 
          understanding of full-stack development and have worked on enhancing my problem-solving skills. 
          I still need to improve on time management and testing."
        </p>
      </div>

      <div className="section">
        <h2 className="sub-heading">Post-Program Goals</h2>
        <div className="goals-container">
          <div className="goal-category">
            <h3 className="goal-title">Short-Term Goals:</h3>
            <ul className="goals-list">
              <li>Secure a job in web development.</li>
              <li>Build 2-3 more portfolio projects.</li>
            </ul>
          </div>

          <div className="goal-category">
            <h3 className="goal-title">Long-Term Goals:</h3>
            <ul className="goals-list">
              <li>Become a full-stack developer.</li>
              <li>Contribute to open-source projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndGoals;
