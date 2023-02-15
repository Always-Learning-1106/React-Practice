import { useState } from "react";
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
    <div onClick={handleClick}>
      <img width="150px" alt="animal" src={svgMap[type]}></img>
      <img
        width={12 + clicks}
        height={12 + clicks}
        alt="heart"
        src={heart}
      ></img>
    </div>
  );
}

export default AnimalShow;
