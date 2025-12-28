import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getAnimeList } from "@/backend/anime/get-anime-list";
import { TAnime } from "@/backend/anime/anime.type";

export const useAnimeList = (page = 1) =>
  useQuery<TAnime[]>({
    queryKey: ["animeList", page],
    queryFn: () => getAnimeList({ page }),
  });

export const useAnimeListInfinite = (search?: string) =>
  useInfiniteQuery<TAnime[]>({
    queryKey: ["animeListInfinite", search],
    queryFn: ({ pageParam = 1 }) => getAnimeList({ page: pageParam, search }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
