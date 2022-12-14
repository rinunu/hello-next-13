import "server-only";

import { sleep } from "../util/sleep";

import Pokedex, { NamedAPIResource } from "pokedex-promise-v2";
import PokeAPI from "pokedex-promise-v2";

const P = new Pokedex();

export type StaticSampleListItem = NamedAPIResource;
export type StaticSample = PokeAPI.Pokemon;

export async function getStaticSampleList(): Promise<StaticSampleListItem[]> {
  const list = await P.getPokemonsList();
  return list.results.slice(0, 10);
}

export async function getStaticSampleDetail(id: string): Promise<StaticSample> {
  return (await P.getPokemonByName(id)) as StaticSample;
}
