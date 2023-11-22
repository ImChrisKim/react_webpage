import React from "react";
import { skillText } from "../constants";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__inner">
        <h2 className="skills__title">
          기술스택 <em>Skills</em>
        </h2>
        <div className="skills__wrap">
          {skillText.map((skill, key) => (
            <article className={`skills__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="name">
                <div>{skill.title}</div>
              </div>
              <h3 className="level">{skill.level}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
