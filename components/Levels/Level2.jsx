import { mario, wario, luigi, yoshi } from "../../helpers/images";
import { Character } from "../Game/Characters";
import { useMemo } from "react";

import { shuffleArray } from "../../helpers/fonctions";

const characterRepetition = 13;
export const Level2 = () => {
  const characterArray = useMemo(() => {
    const characters = [mario, wario, yoshi];

    const repeatedArray = characters.flatMap((character) =>
      Array(characterRepetition).fill(character)
    );
    repeatedArray.push(luigi);

    return shuffleArray(repeatedArray);
  }, []);
  return (
    <section className="level-2">
      {characterArray.map((character, index) => (
        <Character icon={character} key={index} />
      ))}
    </section>
  );
};
