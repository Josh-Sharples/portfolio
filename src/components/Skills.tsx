import javascript from "../Images/javascript.png";
import typescript from "../Images/typescript-logo.png";
import tailwind from "../Images/tailwind.png";
import reactLogo from "../Images/react-logo.png";
import node from "../Images/node.js-logo.png";
import postgresql from "../Images/PostgreSQL-logo.png";

export default function Skills() {
  const skills = [
    {
      skill: "JavaScript",
      img: javascript,
    },
    {
      skill: "TypeScript",
      img: typescript,
    },
    {
      skill: "Tailwind",
      img: tailwind,
    },
    {
      skill: "React",
      img: reactLogo,
    },
    {
      skill: "React Native",
      img: reactLogo,
    },
    {
      skill: "Node JS",
      img: node,
    },
    {
      skill: "PostgreSQL",
      img: postgresql,
    },
  ];

  return (
    <div id="skills" className="mt-40 mb-40">
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '60px'}}>
        <h1 className="text-3xl">Skills</h1>
      </div>
      <div className="skills skills-small">
        {skills.map((skill) => {
          return (
            <div key={skill.skill} className="card lg:card bg-base-100 shadow ">
              <img className="skill-img" src={skill.img} />
              <h1>{skill.skill}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
