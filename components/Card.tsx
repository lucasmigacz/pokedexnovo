import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { pokemonData } from "../pages";

export interface CardProps {
  pokemonsResults: pokemonData[];
}

const Card = ({ pokemonsResults }: CardProps) => {
  return (
    <>
      <MainContainer>
        <ListPokemons>
          {pokemonsResults.map((pokemonsResult, i) => (
            <>
              <Link href={`/pokemons/${i + 1}`}>
                <Pokemons key={i}>
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      i + 1
                    }.png`}
                    width={200}
                    height={200}
                    alt="Pokemons"
                  />
                  {pokemonsResult.name}
                </Pokemons>
              </Link>
            </>
          ))}
        </ListPokemons>
      </MainContainer>
      ;
    </>
  );
};

export const MainContainer = styled.div``;
export const ListPokemons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;
export const Pokemons = styled.li`
  background: #525050;
  margin: 14px;
  border: 0.1px solid gray;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;
  font-size: 1.6em;
  text-transform: capitalize;
  color: #d3d3d3;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transform: scale(1.1);
  }
`;

export default Card;
