import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export const getServerSideProps = async (props: any) => {
  const api = "https://pokeapi.co/api/v2/pokemon";
  const data = await fetch(`${api}/${props.query.pokemonsId}`);
  const res = await data.json();

  const apiColor = "https://pokeapi.co/api/v2/pokemon-species";
  const dataColor = await fetch(`${apiColor}/${props.query.pokemonsId}`);
  const resColor = await dataColor.json();
  return {
    props: { pokemonsIndividualData: res, pokemonColor: resColor },
  };
};

interface iPokemonsIndividualData {
  pokemonsIndividualData: {
    height: number;
    weight: number;
    name: string;
    sprites: any;

    map: Function;
  };
  pokemonColor: {
    color: {
      color: string;
      name: string;
    };
  };
}

const pokemonsId = ({
  pokemonsIndividualData,
  pokemonColor,
}: iPokemonsIndividualData) => {
  console.log(pokemonsIndividualData);
  return (
    <MainContainer color={pokemonColor.color.name}>
      <>
        <Head>
          <title>PokeDex | {pokemonsIndividualData.name}</title>
        </Head>
        <ImageContainer>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image
                src={`${pokemonsIndividualData.sprites.front_default}`}
                height={220}
                width={300}
                alt="Pokemon Carousel Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={`${pokemonsIndividualData.sprites.back_default}`}
                height={220}
                width={300}
                alt="Pokemon Carousel Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={`${pokemonsIndividualData.sprites.front_shiny}`}
                height={220}
                width={300}
                alt="Pokemon Carousel Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={`${pokemonsIndividualData.sprites.back_shiny}`}
                height={220}
                width={300}
                alt="Pokemon Carousel Images"
              />
            </SwiperSlide>
          </Swiper>
        </ImageContainer>
        <TitlesPokemonCards>Name:</TitlesPokemonCards>
        <ParagraphPokemonCards>
          {pokemonsIndividualData.name}
        </ParagraphPokemonCards>
        <SubTitlesPokemonCards>Height</SubTitlesPokemonCards>
        <ParagraphPokemonCards>
          {Math.floor(pokemonsIndividualData.height * 2.54)} CM
        </ParagraphPokemonCards>
        <SubTitlesPokemonCards>Weight</SubTitlesPokemonCards>
        <ParagraphPokemonCards>
          {Math.floor(pokemonsIndividualData.weight / 2.205)} KG
        </ParagraphPokemonCards>
      </>
    </MainContainer>
  );
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 800px;
  background-color: ${(props) => props.color};
  margin: 60px auto;
  border-radius: 30px;
`;
export const ImageContainer = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50px;
  outline: none;
  transition: 0.25s;
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TitlesPokemonCards = styled.h1`
  font-size: 3em;
`;
export const SubTitlesPokemonCards = styled.h2`
  font-size: 2em;
`;
export const ParagraphPokemonCards = styled.p`
  font-size: 1.6em;
  text-transform: capitalize;
`;

export default pokemonsId;
