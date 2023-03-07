import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const [findId, setFindId] = useState('')
  const [findName, setFindName] = useState('')
  const [order, setOrder] = useState('')

  const handleInputFindChange = (event) => {
    setFindId(event.target.value)
  }

  const handleInputFindName = (event) => {
    setFindName(event.target.value)
  }

  const handleOrder = (event) => {
    setOrder(event.target.value)
  }

  console.log(order)
  return (
    <>
      <GlobalStyle />
      <Header 
        valueId={findId} 
        handleInputFindChange={handleInputFindChange}
        valueName={findName}
        handleInputFindName={handleInputFindName}
        handleOrder={handleOrder}
      />
      <CardsContainer>
        {pokemons.filter((item) => {
          if(findId){
            return item.id.includes(findId)
          }else{
            return item
          }
        }).filter((item) => {
          if(findName){
            return item.name.english.toLocaleLowerCase().includes(findName.toLocaleLowerCase())
          }else{
            return item
          }
        }).sort((a, b) => {
          if(order === "crescent"){
            return a.id - b.id
          }

          if(order === "decrescent"){
            return b.id - a.id
          }
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
