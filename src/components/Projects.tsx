import frontend from "../Images/coding-news-frontend.png";
import backend from "../Images/coding-news-backend.png";
import javaRewards from "../Images/java-rewards.png";

export default function Projects() {
  const projects = [
    {
      projectName: "Coding-News Backend",
      description:
        "This RESTful API is a representation of a Reddit-styled platform that makes use of calls via CRUD operations.",
      image: backend,
      gitHub: "https://github.com/Josh-Sharples/Back-End-API",
      hostedUrl: "https://coding-news.onrender.com/api",
    },
    {
      projectName: "Coding-News Frontend",
      description:
        "A Reddit-style application that has been built to adopt the various endpoints available on the backend API.",
      image: frontend,
      gitHub: "https://github.com/Josh-Sharples/Coding---News",
      hostedUrl: "https://coding-news.netlify.app/",
    },
    {
      projectName: "Java Rewards",
      description:
        "A mobile application built using React Native. Java Rewards is a loyalty rewards app designed for independent coffee shops.",
      image: javaRewards,
      gitHub: "https://github.com/Liam-Tomlinson/Java-Rewards-Front-End",
      hostedUrl: "https://northcoders.com/project-phase/java-rewards",
    },
  ];

  return (
    <div id="projects" className="ml-20 mr-20 mt-40 mb-40">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "60px",
        }}
      >
        <h1 className="text-3xl">Projects</h1>
      </div>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div
              key={project.projectName}
              className="card-project lg:card bg-base-100 shadow "
            >
              <div>
                <img className="project-img" src={project.image} />
              </div>
              <div>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 20,
                  }}
                  className="text-xl"
                >
                  {project.projectName}
                </h1>
                <h1>{project.description}</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <button style={{ display: "flex" }} className="mt-10">
                    <a
                      href={project.gitHub}
                      target="_blank"
                      className="btn bg-orange-100 text-l"
                    >
                      GitHub
                    </a>
                  </button>
                  <button style={{ display: "flex" }} className="mt-10">
                    <a
                      href={project.hostedUrl}
                      target="_blank"
                      className="btn bg-orange-100 text-l"
                    >
                      Hosted
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
