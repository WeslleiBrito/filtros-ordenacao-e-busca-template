import React from "react";
import { Container } from "./styles";

const Header = ({valueId, handleInputFindChange, valueName, handleInputFindName, handleOrder}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input type="number" value={valueId} onChange={handleInputFindChange} placeholder="Buscar por id" />
      <input type="text" value={valueName} onChange={handleInputFindName} placeholder="Buscar por nome" />
      <select onChange={handleOrder}>
        <option value="">Ordenar</option>
        <option value="crescent">Crescente</option>
        <option value="decrescent">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
