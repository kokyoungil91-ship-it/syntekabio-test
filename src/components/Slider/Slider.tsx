"use client";

import { useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider() {
  const slides = [
    { src: "/img/slider_1.png", text: "슬라이드 텍스트 1" },
    { src: "/img/slider_2.png", text: "슬라이드 텍스트 2" },
    { src: "/img/slider_3.png", text: "슬라이드 텍스트 3" },
    { src: "/img/slider_4.png", text: "슬라이드 텍스트 4" },
    { src: "/img/slider_5.png", text: "슬라이드 텍스트 5" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section aria-labelledby="cards-title" style={{ marginTop: "60px" }}>
      <h2 id="cards-title" style={{ textAlign: "center" }}>
        이미지 슬라이드
      </h2>

      <div className={styles.wrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${index * 320}px)` }}
        >
          {slides.map((item, i) => (
            <div className={styles.card} key={i}>
              <img src={item.src} className={styles.img} alt={`슬라이드 ${i + 1}`} />
              <p className={styles.caption}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${index === i ? styles.active : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`슬라이드 ${i + 1} 보기`}
          ></button>
        ))}
      </div>
    </section>
  );
}
