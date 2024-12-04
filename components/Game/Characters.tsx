import luigi from "@/public/characters/luigi.png";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGameStore } from "../../store/store";
import Image from "next/image";

type ScoreModifierProps = {
  positive: boolean;
};

const ScoreModifier = ({ positive }: ScoreModifierProps) => {
  const divRef = useRef(null);
  const { increaseScore, decreaseScore, setGameToPause } = useGameStore();
  useGSAP(() => {
    gsap.to(divRef.current, {
      y: positive ? -25 : 25,
      ease: "linear",
      duration: 0.5,
    });
    if (positive) {
      increaseScore();
    } else {
      decreaseScore();
    }
    setGameToPause();
  }, []);
  return (
    <div className={`score-increase ${positive ? null : "blue"}`} ref={divRef}>
      {positive ? "+5" : "-10"}
    </div>
  );
};

type CharacterProps = {
  icon: string;
};

export const Character = ({ icon }: CharacterProps) => {
  const [clicked, setClicked] = useState(false);
  const { gameState } = useGameStore();
  if (icon === "-") {
    return null;
  }
  return (
    <div className="character">
      <Image
        src={icon}
        alt="character"
        width={45}
        height={45}
        onClick={() => {
          if (gameState === "play") {
            setClicked(true);
          }
        }}
        className="character-image"
        style={{ cursor: "pointer" }}
        priority
        unoptimized
      />

      {clicked && (
        <ScoreModifier positive={typeof icon === "object" && icon === luigi} />
      )}
    </div>
  );
};
