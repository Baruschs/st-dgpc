// src/components/ImagePanel.js

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./ImagePanel.css";

const ImagePanel = ({ imageUrl, title, description, stats, onChapterEnter, chapterId, isActive }) => {
  const textRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView && onChapterEnter) {
      onChapterEnter(chapterId);
    }

    if (textRef.current) {
      textRef.current.classList.toggle("visible", inView);
    }
  }, [inView, onChapterEnter, chapterId]);

  return (
    <section
      ref={ref}
      className={`image-panel-fixed ${inView ? "visible" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div ref={textRef} className="image-panel-content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {stats && (
          <ul className="styled-list">
            {stats.map((stat, index) => (
              <li key={index}>
                <span className="bullet"></span>
                <span className="bullet-text">{stat.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ImagePanel;
