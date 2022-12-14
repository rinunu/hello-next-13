import Pokedex from "pokedex-promise-v2";
import { headers } from "next/headers";

const P = new Pokedex();

type Id = string;

const ids: Id[] = [];

/**
 * 取得するたびに増える
 */
export async function getDynamicSampleList(): Promise<Id[]> {
  // dynamic data
  headers();

  const allIds = (await P.getPokemonsList()).results;

  ids.push(allIds[Math.floor(allIds.length * Math.random())].name);
  return ids;
}
