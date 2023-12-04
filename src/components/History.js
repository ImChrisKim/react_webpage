import React from "react";
import { historyText } from "../constants";

const history = () => {
  var winH = window.innerHeight;
  var scrollY = window.scrollY;

  console.log("현재 스크롤 위치 : ", scrollY);

  return (
    <section id="history">
      <div className="history__inner">
        <h2 className="history__title">
          연혁 <em>History</em>
        </h2>
        <div className="history__desc">
          <div>
            {historyText.map((history, key) => (
              <div key={key}>
                <span>{key + 1}</span>
                <h3>{history.title}</h3>
                <p>{history.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default history;
