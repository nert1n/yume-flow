import { useState, useCallback, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AnimeItem } from "@/components/news/anime-item";
import { useAnimeListInfinite } from "@/hooks/useAnime";
import { TAnime } from "@/backend/anime/anime.type";
import { MainInput } from "@/components/ui/main-input";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useAnimeListInfinite(debouncedSearch);

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

  const renderSeparator = () => <View style={{ height: 16, width: "100%" }} />;

  const renderEmpty = () => {
    if (isLoading) {
      return (
        <View className="flex-1 items-center justify-center py-20">
          <ActivityIndicator size="large" color="#ffffff" />
          <Text className="mt-4 text-gray-400">Loading anime...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View className="flex-1 items-center justify-center py-20">
          <Text className="text-center text-red-500">
            Error loading anime list
          </Text>
        </View>
      );
    }

    if (searchQuery && animeList.length === 0) {
      return (
        <View className="flex-1 items-center justify-center py-20">
          <Text className="text-center text-lg text-gray-400">
            No anime found for "{searchQuery}"
          </Text>
          <Text className="mt-2 text-center text-gray-500">
            Try a different search term
          </Text>
        </View>
      );
    }

    if (!searchQuery) {
      return (
        <View className="flex-1 items-center justify-center py-20">
          <Text className="text-center text-lg text-gray-400">
            Start typing to search for anime
          </Text>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 flex-col gap-2 px-4">
        <MainInput
          placeholder="Search by title, genre, description..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
          icon={<IconSymbol name="search" size={20} color="#9CA3AF" />}
        />
        <FlatList
          data={animeList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: TAnime }) => (
            <AnimeItem anime={item} />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={
            animeList.length === 0 ? { flexGrow: 1 } : { paddingBottom: 20 }
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
