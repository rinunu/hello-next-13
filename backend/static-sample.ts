import "server-only";

import Pokedex from "pokedex-promise-v2";
import PokeAPI, { NamedAPIResource } from "pokedex-promise-v2";

const P = new Pokedex();

export type StaticSampleListItem = NamedAPIResource;
export type StaticSample = PokeAPI.Pokemon;

export async function getStaticSampleList(): Promise<StaticSampleListItem[]> {
  const list = await P.getPokemonsList();
  return list.results.slice(0, 20);
}

export async function getStaticSampleDetail(id: string): Promise<StaticSample> {
  return (await P.getPokemonByName(id)) as StaticSample;
}
