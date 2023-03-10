import { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import dog from "./svg/dog.svg";
const svgMap = {
  bird,
  cat,
  gator,
  cow,
  horse,
  dog,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]}></img>
      <img
        width={20 + clicks + "px"}
        className="heart"
        alt="heart"
        src={heart}
      ></img>
    </div>
  );
}

export default AnimalShow;
