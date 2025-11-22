import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import Slider from "../components/Slider/Slider";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Header />

      <main
          style={{
             width: "100%", maxWidth: "892px", margin: "0 auto", padding: "0 16px", borderRadius: "12px",
          }}
        >
        <h1 className="visually-hidden">반응형 테스트 페이지</h1>

        <figure>
          <img
            src="/img/main.jpg"
            alt="메인 이미지"
            style={{
              width: "100%", maxWidth: "892px", borderRadius: "12px", display: "block", margin: "30px auto", marginBottom: "50px",   
            }}
          />

          <figcaption style={{ 
            margin:"0 auto", textAlign: "center", margin: "30px auto", marginBottom: "50px", 
            }}>
            테스트 영상
          </figcaption>
        </figure>

        <section aria-labelledby="video-title">
          <h2 id="video-title" className="visually-hidden">
            테스트 영상
          </h2>

          <video
            id="autoVideo"
            controls
            muted
            playsInline
            src="/video/main.mp4"
            aria-describedby="video-title"
            style={{
              width: "100%", maxWidth: "892px", height: "504px", marginTop: "20px", display: "block", marginInline: "auto", borderRadius: "12px" ,
            }}
          ></video>
        </section>

        <Tabs />

        <Slider />
      </main>

      <Script id="auto-video-script" strategy="afterInteractive">
        {`
          (function () {
            const video = document.getElementById("autoVideo");
            if (!video) return;

            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    
                    video.play().catch(() => {});
                  } else {                   
                    video.pause();
                  }
                });
              },
              { threshold: 0.5 } 
            );

            observer.observe(video);
          })();
        `}
      </Script>
    </>
  );
}
