import { mario, wario, luigi, yoshi } from "../../helpers/images";
import { Character } from "../Game/Characters";
import { useMemo } from "react";
import { shuffleArray } from "../../helpers/fonctions";

export const Level1 = () => {
  const characterArray = [mario, wario, luigi, yoshi];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shuffledArray = useMemo(() => shuffleArray(characterArray), []);
  return (
    <section className="level-1">
      {shuffledArray.map((character, index) => {
        return <Character key={index} icon={character} />;
      })}
    </section>
  );
};
