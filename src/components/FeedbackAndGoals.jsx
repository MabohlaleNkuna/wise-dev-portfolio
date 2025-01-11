import React from "react";

const FeedbackAndGoals = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Feedback & Post-Program Goals</h1>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>Facilitator Feedback</h2>
        <p style={styles.text}>
          "The facilitator has provided insightful guidance throughout the program, 
          offering both constructive feedback and encouragement."
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>Self-Reflection</h2>
        <p style={styles.text}>
          "I have grown immensely as a developer during this program. I have gained a deeper 
          understanding of full-stack development and have worked on enhancing my problem-solving skills. 
          I still need to improve on time management and testing."
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>Post-Program Goals</h2>
        <div style={styles.goalsContainer}>
          <div style={styles.goalCategory}>
            <h3 style={styles.goalTitle}>Short-Term Goals:</h3>
            <ul style={styles.goalsList}>
              <li>Secure a job in web development.</li>
              <li>Build 2-3 more portfolio projects.</li>
            </ul>
          </div>

          <div style={styles.goalCategory}>
            <h3 style={styles.goalTitle}>Long-Term Goals:</h3>
            <ul style={styles.goalsList}>
              <li>Become a full-stack developer.</li>
              <li>Contribute to open-source projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #241D10, #004AAD, #F4C561)",
    padding: "4rem 2rem",
    color: "#FFFFFF",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#F4C561",
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "2rem",
  },
  subHeading: {
    fontSize: "1.8rem",
    color: "#F4C561",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#E0E0E0",
  },
  goalsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    marginTop: "2rem",
  },
  goalCategory: {
    textAlign: "left",
  },
  goalTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#F4C561",
  },
  goalsList: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    fontSize: "1.2rem",
    color: "#E0E0E0",
  },
};

export default FeedbackAndGoals;
