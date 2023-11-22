import React from "react";

import about from "../assets/img/about.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div class="intro__inner">
        <h1 class="intro__title">김성우의 웹페이지</h1>
        <div class="intro__lines" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="intro__text">
          <div class="text">
            <div>ㅎㅇㅎㅇ 김성우 포트폴리오</div>
          </div>
          <div class="img">
            <img src={about} alt="어바웃" />
          </div>
        </div>
        <div class="intro__lines bottom" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
