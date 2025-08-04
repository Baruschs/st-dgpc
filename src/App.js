import React, { useState, useCallback, useMemo } from "react";
import Map from "./components/Map";
import ScrollyPanel from "./components/ScrollyPanel";
import ImagePanel from "./components/ImagePanel";
import MapSwitcher from "./components/MapSwitcher";
import { chapters } from "./config/chapters";
import { Protocol } from 'pmtiles';
import "./App.css";
import "./components/MapSwitcher.css";

const mapStyles = {
  Claro: "https://www.mapabase.atdt.gob.mx/style_white_3d_places.json",
  Oscuro: "https://www.mapabase.atdt.gob.mx/style_black_3d_places.json",
  Satelital: "https://www.mapabase.atdt.gob.mx/style_satellite.json",
};

function App() {
  const [activeChapterId, setActiveChapterId] = useState(
    Object.keys(chapters)[0]
  );
  const [styleUrl, setStyleUrl] = useState(mapStyles.Claro);
  const [isPulsing, setIsPulsing] = useState(false);

  const handleChapterEnter = useCallback((chapterId) => {
    setActiveChapterId(chapterId);
  }, []);

  const handleStyleChange = (newStyle) => {
    setStyleUrl(newStyle);
    setIsPulsing(true);
    setTimeout(() => {
      setIsPulsing(false);
    }, 400);
  };
  
  const activeChapter = useMemo(
    () => chapters[activeChapterId],
    [activeChapterId]
  );
  
  const isImageChapter = activeChapter.id.startsWith("imagen");

  return (
    <div className="app-container">
      <div className="scrolly-column">
        {Object.values(chapters).map((chapter, index) => {
  const classNames = ["scrolly-panel"];
  if (index === 0) classNames.push("is-title-card");
  if (chapter.id === activeChapterId) classNames.push("is-active");

  const panelProps = {
    key: chapter.id,
    "data-chapter-id": chapter.id,
    className: classNames.join(" "),
  };

  if (chapter.imageUrl) {
    return (
      <ImagePanel
        {...panelProps}
        imageUrl={chapter.imageUrl}
        title={chapter.title}
        description={chapter.description}
        stats={chapter.stats}
      />
    );
  }
  return (
    <ScrollyPanel
      {...panelProps}
      chapter={chapter}
      onChapterEnter={handleChapterEnter}
    />
  );
})}
      </div>

      {!isImageChapter && (
        <div className={`map-column ${isPulsing ? "is-pulsing" : ""}`}>
          <MapSwitcher styles={mapStyles} activeStyle={styleUrl} onStyleChange={handleStyleChange} />
          <Map
            location={activeChapter.location}
            activeChapterId={activeChapterId}
            styleUrl={styleUrl}
          />
        </div>
      )}
    </div>
  );
}

export default App;