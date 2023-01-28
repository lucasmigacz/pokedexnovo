import styled from "styled-components";
import Head from "next/head";
import Card from "../components/Card";

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const data = await fetch(`${api}/?limit=${maxPokemons}`);
  const res = await data.json();
  return {
    props: {
      pokemonsResults: res.results,
    },
  };
};

export interface pokemonData {
  name: string;
}

export interface Ipokemons {
  pokemonsResults: pokemonData[];
}

export default function Home({ pokemonsResults }: Ipokemons) {
  return (
    <>
      <Head>
        <title>PokeDex</title>
      </Head>
      <MainContainer>
        <Card pokemonsResults={pokemonsResults} />
      </MainContainer>
    </>
  );
}

export const MainContainer = styled.div``;
