import React from "react";

const FeedbackAndGoals = () => {
  return (
    <section className="feedback-container">
      <div className="content-section">
        <h1 className="main-title">Feedback & After-Program Aspirations</h1>

        <div className="goal-section">
          <h2 className="subtitle">Mentor Insights</h2>
          <p className="description">
            "The mentor has provided valuable perspectives throughout the journey, offering both actionable feedback and motivational support."
          </p>
        </div>

        <div className="goal-section">
          <h2 className="subtitle">Personal Growth</h2>
          <p className="description">
            "My abilities have expanded significantly in this program. I've developed a stronger grasp of full-stack methodologies and enhanced my problem-solving capabilities. However, I must focus on improving my time management and testing proficiency."
          </p>
        </div>

        <div className="goal-section">
          <h2 className="subtitle">Post-Program Aspirations</h2>
          <div className="goals-wrapper">
            <div className="goal-category">
              <h3 className="category-heading">Immediate Aspirations:</h3>
              <ul className="goal-list">
                <li>Obtain a role in web development.</li>
                <li>Create 2-3 additional projects for my portfolio.</li>
              </ul>
            </div>

            <div className="goal-category">
              <h3 className="category-heading">Long-Term Aspirations:</h3>
              <ul className="goal-list">
                <li>Become proficient as a full-stack developer.</li>
                <li>Engage in meaningful open-source contributions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndGoals;
