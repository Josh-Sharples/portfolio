import cv from "../Images/Josh-Sharples-CV.pdf";
export default function About() {
  return (
    <div id="about" className="ml-60 mr-60 mt-40 mb-40 about-small">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "60px",
          paddingBottom: "10px",
          borderBottom: "solid 1px var(--secondary-colour)",
        }}
      >
        <h2 className="text-3xl">About</h2>
      </div>
      <div className="about about-small">
        <div className="about-para about-para-small">
          <p className="text-lg" style={{ display: "flex" }}>
            I am fueled by 🍕 and a passion for creating and innovating both
            frontend and full-stack applications.
            <br />
            Through comprehensive training, I've become proficient in Full Stack
            Web Development, utilising fundamental principles and
            industry-standard methodologies.
            <br />
            As a result, I thrive in collaborative environments, leveraging my
            interpersonal skills to deliver exceptional results, while also
            demonstrating a strong ability to work autonomously.
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <button style={{ display: "flex" }} className="mt-10">
            <a
              href={cv}
              download="Josh-Sharples-CV"
              className="btn bg-orange-100 text-l"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
