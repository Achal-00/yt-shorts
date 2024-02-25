import { useRef, useEffect, useState } from "react";
import ExtraFunction from "./ExtraFunction";
import VideoNav from "./VideoNav";

export default function VideoContainer(props) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const imageRef = useRef(null);
  const likeRef = useRef(null);
  const upArrow = useRef(null);
  const downArrow = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    const progressElement = progressRef.current;

    setInterval(function () {
      progressElement.value = Math.round(
        (videoElement.currentTime / videoElement.duration) * 100
      );
    });

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const handleVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
          videoElement.style.opacity = "1";
          imageRef.current.style.display = "none";
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, options);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoRef]);

  const handlePointerDown = async (event) => {
    videoRef.current.setPointerCapture(event.pointerId);
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      videoRef.current.pause();
      videoRef.current.style.opacity = "0.5";
      imageRef.current.style.display = "block";
    } else {
      videoRef.current.play();
      videoRef.current.style.opacity = "1";
      imageRef.current.style.display = "none";
    }
  };

  const handleLike = async (event) => {
    likeRef.current.setPointerCapture(event.pointerId);
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      likeRef.current.setAttribute("fill", "royalblue");
    } else {
      likeRef.current.setAttribute("fill", "white");
    }
  };

  const handleUp = (event) => {
    upArrow.current.setPointerCapture(event.pointerId);
    if (containerRef.current.previousSibling)
      containerRef.current.previousSibling.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleDown = (event) => {
    downArrow.current.setPointerCapture(event.pointerId);
    if (containerRef.current.nextSibling)
      containerRef.current.nextSibling.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="video-container"
      id={props.data.username}
      ref={containerRef}
    >
      <div className="video-frame">
        <video
          src={props.data.url}
          id={props.data.username}
          height="90%"
          ref={videoRef}
          autoPlay=""
          playsInline=""
          loop
          onPointerDown={handlePointerDown}
        />
        <ExtraFunction likeRef={likeRef} handleLike={handleLike} />
        <VideoNav
          handleUp={handleUp}
          upArrow={upArrow}
          handleDown={handleDown}
          downArrow={downArrow}
        />
        <img
          src="./pause.svg"
          alt="pause"
          ref={imageRef}
          className="pause-image"
        />
      </div>
      <progress className="progress" max="100" value="0" ref={progressRef}>
        Progress
      </progress>
      <p>
        {props.data.title} | <span>@{props.data.username}</span>
      </p>
    </div>
  );
}
