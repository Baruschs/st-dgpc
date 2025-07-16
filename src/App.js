import React, { useState, useCallback } from 'react';
import Map from './components/Map';
import ScrollyPanel from './components/ScrollyPanel';
import { chapters } from './config/chapters';
import './App.css';

function App() {
  const [activeChapterId, setActiveChapterId] = useState(Object.keys(chapters)[0]);

  const handleChapterEnter = useCallback((chapterId) => {
    setActiveChapterId(chapterId);
  }, []);

  const activeChapter = chapters[activeChapterId];

  return (
    <div className="app-container">
      <div className="scrolly-column">
        {Object.values(chapters).map((chapter, index) => (
          <ScrollyPanel
            key={chapter.id}
            chapter={chapter}
            onChapterEnter={handleChapterEnter}
            // Añadimos una clase especial solo al primer elemento (índice 0)
            className={index === 0 ? 'is-title-card' : ''}
          />
        ))}
      </div>
      <div className="map-column">
        <Map location={activeChapter.location} />
      </div>
    </div>
  );
}

export default App;