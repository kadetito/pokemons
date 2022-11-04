import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoriteCardPokemons } from "../pokemon";

interface Props {
  pokemons: number[];
}

export const Favorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id: any) => (
        <FavoriteCardPokemons key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
