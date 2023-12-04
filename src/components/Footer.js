import React, { useState } from "react";
import { footerText } from "../constants";

const Footer = () => {
  const [isTitleClicked, setIsTitleClick] = useState(false);

  const titleClick = () => {
    setIsTitleClick(!isTitleClicked);
  };

  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__text">
          <span>ChrisKim</span>
          <span>© webs</span>
        </div>
        <div className="footer__info">
          <div className="left">
            <div className="title" onClick={titleClick}>
              <span>관련 URL (클릭)</span>
            </div>
            {/* <p>관련 URL</p> */}
          </div>
          {isTitleClicked && (
            <div className="right">
              <ul>
                {footerText.map((footer, key) => (
                  <li key={key}>
                    <a href={footer.link}>{footer.title}</a>
                    <em>{footer.desc}</em>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="footer__right">
          <br />이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
