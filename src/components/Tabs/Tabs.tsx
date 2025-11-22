"use client";

import { useState } from "react";
import styles from "./Tabs.module.scss";

export default function Tabs() {
  const [tab, setTab] = useState(1);

  return (
    <section aria-labelledby="tab-title">
      <h2 id="tab-title" className="visually-hidden">
        탭 콘텐츠
      </h2>

      <div className={styles.tabs} role="tablist">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            role="tab"
            aria-selected={tab === n}
            onClick={() => setTab(n)}
            className={styles.tabBtn}
          >
            이미지 탭_{n}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        <img
          key={tab}
          src={`/img/01_0${tab}.jpg`}
          alt={`탭 이미지 ${tab}`}
          className={styles.tabImage}
        />
      </div>
    </section>
  );
}
