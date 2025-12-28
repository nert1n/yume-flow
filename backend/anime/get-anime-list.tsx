import anime from "./anime.json";

import { TAnime } from "@/backend/anime/anime.type";

const animeList = anime;

interface AnimeListParams {
  page?: number;
  search?: string;
}

export const getAnimeList = async ({
  page = 1,
  search,
}: AnimeListParams): Promise<TAnime[]> => {
  return new Promise((resolve) => {
    const limit = 10;

    let filteredList = animeList;
    if (search && search.trim()) {
      const searchLower = search.toLowerCase().trim();
      filteredList = animeList.filter(
        (item) =>
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.genre.some((g) => g.toLowerCase().includes(searchLower))
      );
    }

    const start = (page - 1) * limit;
    const animePage = filteredList.slice(start, start + limit);
    setTimeout(() => {
      resolve(animePage);
    }, 300);
  });
};
