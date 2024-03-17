import cv from "../Images/Josh-Sharples-CV.pdf";
export default function About() {
  return (
    <div id="about" className="ml-20 mr-20 mt-60 mb-40 about-small">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "60px",
        }}
      >
        <h1 className="text-3xl">About</h1>
      </div>
      <div className="about about-small">
        <div className="about-para about-para-small">
          <p className="text-lg" style={{ display: "flex" }}>
            I have recently graduated from a software engineering bootcamp, as a
            Junior Software Developer.
            <br />
            I am fueled by 🍕 and a passion for creating and innovating both
            frontend and full-stack applications.
            <br />
            Through comprehensive training, I've become proficient in Full Stack
            Web Development, utilising fundamental principles and
            industry-standard methodologies.
            <br />
            As a result, I thrive in collaborative environments, leveraging my
            interpersonal skills to deliver exceptional results, while also
            demonstrating a strong ability to work autonomously when needed.
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
