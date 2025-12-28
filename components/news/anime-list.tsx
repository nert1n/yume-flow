import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useAnimeListInfinite } from "@/hooks/useAnime";
import { useCallback } from "react";
import { AnimeItem } from "./anime-item";
import { TAnime } from "@/backend/anime/anime.type";

export function AnimeList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useAnimeListInfinite();

  // Преобразуем данные из infinite query в плоский массив
  const animeList = data?.pages.flatMap((page) => page) ?? [];

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View className="py-4">
        <ActivityIndicator size="small" color="#ffffff" />
      </View>
    );
  };

  if (isLoading) {
    return (
      <View className="mb-6 px-4 py-8">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="mb-6 px-4 py-8">
        <Text className="text-center text-red-500">
          Error loading anime list
        </Text>
      </View>
    );
  }

  return (
    <View className="mb-6">
      <View className="mb-3 flex-row items-center justify-between px-4">
        <Text className="text-xl font-bold text-white">Anime List</Text>
        <Text className="text-sm text-gray-400">{animeList.length} titles</Text>
      </View>
      <FlatList
        data={animeList}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }: { item: TAnime }) => <AnimeItem anime={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}
