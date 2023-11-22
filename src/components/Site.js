import React from "react";
import { siteText } from "../constants";

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((data, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{data.text}</div>
              </div>
              <h3 className="title">{data.title}</h3>
              <div className="btn">
                <a href={data.github}>github</a>
              </div>
              <div className="info">
                <span>{data.info}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
