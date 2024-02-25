import React from "react";
import VideoContainer from "./components/VideoContainer/VideoContainer";

export default function App() {
  const videoURL = [
    {
      url: "https://cdn.pixabay.com/vimeo/536644240/animated-wallpaper-70962.mp4?width=360&hash=c9f12fecc9b5a00b818785dbcf9fcab7e7552c1e",
      title: "Red Flowers",
      username: "flowerMan",
    },
    {
      url: "https://cdn.pixabay.com/vimeo/536644237/animated-wallpaper-70960.mp4?width=360&hash=ca15c0ac9f7c1ae31822efc5f5f40e270b758649",
      title: "Sea View",
      username: "Alex",
    },
    {
      url: "https://cdn.pixabay.com/vimeo/733046618/river-125314.mp4?width=720&hash=5f6725019e788477f80495cfd55c0d2b9ea014fb",
      title: "River Side",
      username: "Lucy",
    },
    {
      url: "https://cdn.pixabay.com/vimeo/536644233/nature-wallpaper-70961.mp4?width=360&hash=8218316ecc64add43e038a7a2ddc6e5ccacc5a26",
      title: "Aesthetic Field",
      username: "Pewdiepie",
    },
    {
      url: "https://player.vimeo.com/external/435674472.sd.mp4?s=9908ea387075904282f58443795ae1631fac1e96&profile_id=165&oauth2_token_id=57447761",
      title: "Grass",
      username: "Lilly",
    },
    {
      url: "https://player.vimeo.com/external/578004622.sd.mp4?s=4a02a455dc53dd945e41a2917994e192d05c1bb0&profile_id=165&oauth2_token_id=57447761",
      title: "Waterfall",
      username: "Russell",
    },
    {
      url: "https://player.vimeo.com/external/577967684.sd.mp4?s=07e4cba9cd491c302b61eaa87a02f472c159da2d&profile_id=165&oauth2_token_id=57447761",
      title: "Clown Fish",
      username: "Ashley",
    },
    {
      url: "https://player.vimeo.com/external/568788870.sd.mp4?s=1d775152e9d06f93cd60efa7f16cb4db1983e1d1&profile_id=165&oauth2_token_id=57447761",
      title: "Moon",
      username: "Sally",
    },
  ];

  return (
    <div className="main-container">
      {videoURL.map((item) => (
        <VideoContainer key={item.username} data={item} />
      ))}
    </div>
  );
}
