import React, { useState, useEffect } from "react";
import { IconNext, IconPrevious } from "./styles";

const SlideShowComponent = ({ datas = [], interval = 3000 }) => {
  const [thumbnails, setThumnails] = useState([]);
  const [previousSlideData, setPreviousSlideData] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideData, setNextSlideData] = useState({});
  const [currentSlideData, setCurrentSlideData] = useState({});

  useEffect(() => {
    setThumnails(datas);
    setCurrentSlideData({
      backgroundImage: "url('" + datas[currentSlide]['e_image_url'] + "')",
      id: `${datas[currentSlide]['te_id']}`
    });

    if (currentSlide > 0) {
      setPreviousSlideData({
        backgroundImage: "url('" + datas[currentSlide - 1] + "')",
        id: `${datas[currentSlide - 1]['te_id']}`
      });
    } else {
      setPreviousSlideData({
        backgroundImage: "url('" + datas[datas.length - 1] + "')",
        id: `${datas[datas.length - 1]['te_id']}`
      });
    }

    if (currentSlide === datas.length - 1) {
      setNextSlideData({
        backgroundImage: "url('" + datas[0] + "')",
        id: `${datas[0]['te_id']}`

      });
    } else {
      setNextSlideData({
        backgroundImage: "url('" + datas[currentSlide + 1] + "')",
        id: `${datas[currentSlide + 1]['te_id']}`

      });
    }

    const loop = setInterval(() => {
      if (currentSlide === datas.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [currentSlide, datas, interval]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);

    }
  }

  function next() {

    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);

    } else {
      setCurrentSlide(currentSlide + 1);

    }
  }

  return (
    <section className="slideshow">
      <div className="slide-holder">
        <section className="slide previous-slide">
          <div style={previousSlideData} className="slide-thumbnail"></div>
        </section>
        <section className="slide current-slide">
        <a href={`/ingresso/${encodeURIComponent(currentSlideData.id)}`} >
          
          <div style={currentSlideData} className="slide-thumbnail">{currentSlideData.id}</div>
        </a>
        </section>
        <section className="slide next-slide">
          <div style={nextSlideData} className="slide-thumbnail"></div>
        </section>
      </div>

      <div className="slideshow-controller">
        <span onClick={()=>previous()}>
          <IconPrevious />
        </span>
        <span onClick={()=>next()}>
          <IconNext />
        </span>
      </div>
    </section>
  );
};

export default SlideShowComponent;
