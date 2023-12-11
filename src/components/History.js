import React, {useEffect, useState} from "react";
import { historyText } from "../constants";
import catImg from "../assets/img/about.jpg"

const History = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
    const winH = window.innerHeight / 1.5; // 윈도우의 높이
    const targetElement = document.getElementById('my_picture_id');
    const targetElementPosition = targetElement.getBoundingClientRect().top; // 그림의 위치에서 윈도우 최상단 까지의 높이


    if (targetElementPosition < winH){
      setIsVisible(true);
    }
    else setIsVisible(false);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
  })
  

  return (
    <section id="history">
      
        <div className="history__title">
          연혁 <em>History</em>
        </div>
        <div className="history__inner">
          <div className="container">
            <img src={catImg} className={`my__picture fade-in ${isVisible ? 'visible' : ''}`} id="my_picture_id"></img>
          </div>
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

export default History;
