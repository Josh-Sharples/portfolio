import { useEffect, useState } from "react";
import javascript from "../Images/javascript.png";
import typescript from "../Images/typescript-logo.png";
import tailwind from "../Images/tailwind.png";
import reactLogo from "../Images/react-logo.png";
import node from "../Images/node.js-logo.png";
import postgresql from "../Images/PostgreSQL-logo.png";
import express from "../Images/express-js-logo.png";
import jest from "../Images/jest-logo.jpg";
import wordpress from "../Images/wordpress-logo.webp";

export default function Skills() {
  const skills = [
    {
      skill: "JavaScript",
      img: javascript
    },
    {
      skill: "TypeScript",
      img: typescript
    },
    {
      skill: "Tailwind",
      img: tailwind
    },
    {
      skill: "React",
      img: reactLogo
    },
    {
      skill: "React Native",
      img: reactLogo
    },
    {
      skill: "Node JS",
      img: node
    },
    {
      skill: "PostgreSQL",
      img: postgresql
    },
    {
      skill: "Express JS",
      img: express
    },
    {
      skill: "Jest",
      img: jest
    }, 
    {
      skill: "Wordpress",
      img: wordpress
    }
  ];

  let [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div id="skills" className="mt-40 mb-40">
      <div className="mr-60 ml-60" style={{
        display: 'flex', 
        justifyContent: 'flex-start', 
        marginBottom: '60px',
        paddingBottom: "10px",
        borderBottom: "solid 1px var(--secondary-colour)",
        }}>
        <h2 className="text-3xl">Skills</h2>
      </div>
      <div className="skills skills-small">
        <div className="logos" style={{width: `${width}px`}}>

          <div className="logos-slide">
            {skills.map((skill) => {
              return (
                <div key={skill.skill} className="card lg:card">
                  <img className="skill-img" src={skill.img} />
                  <h3>{skill.skill}</h3>
                </div>
              );
            })}
          </div>
          <div className="logos-slide">
            {skills.map((skill) => {
              return (
                <div key={skill.skill} className="card lg:card">
                  <img className="skill-img" src={skill.img} />
                  <h1>{skill.skill}</h1>
                </div>
              );
            })}
          </div>

          <div className="logos-slide">
            {skills.map((skill) => {
              return (
                <div key={skill.skill} className="card lg:card">
                  <img className="skill-img" src={skill.img} />
                  <h1>{skill.skill}</h1>
                </div>
              );
            })}
          </div>

        </div>

        <div className="logos" style={{width: `${width}px`}}>

          <div className="logos-slide-rev">
            {skills.map((skill) => {
              return (
                <div key={skill.skill} className="card lg:card">
                  <img className="skill-img" src={skill.img} />
                  <h3>{skill.skill}</h3>
                </div>
              );
            })}
          </div>
          <div className="logos-slide-rev">
            {skills.map((skill) => {
              return (
                <div key={skill.skill} className="card lg:card">
                  <img className="skill-img" src={skill.img} />
                  <h1>{skill.skill}</h1>
                </div>
              );
            })}
          </div>

          <div className="logos-slide-rev">
            {skills.map((skill) => {
              return (
                <div key={skill.skill} className="card lg:card">
                  <img className="skill-img" src={skill.img} />
                  <h1>{skill.skill}</h1>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
