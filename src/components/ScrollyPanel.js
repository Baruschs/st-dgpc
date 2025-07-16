import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollyPanel.css';

// Ahora acepta 'className' como una prop
const ScrollyPanel = ({ chapter, onChapterEnter, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      onChapterEnter(chapter.id);
    }
  }, [inView, chapter.id, onChapterEnter]);

  // Unimos la clase base 'scrolly-panel' con la clase extra que recibimos
  const panelClasses = `scrolly-panel ${className || ''}`;

  return (
    <section ref={ref} className={panelClasses}>
      <div className="scrolly-panel-content">
        <h2>{chapter.title}</h2>
        <p>{chapter.description}</p>
      </div>
    </section>
  );
};

export default ScrollyPanel;