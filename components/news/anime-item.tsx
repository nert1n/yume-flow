import { TouchableOpacity, View, Text } from "react-native";
import { TAnime } from "@/backend/anime/anime.type";
import { Image } from "expo-image";

interface AnimeItemProps {
  anime: TAnime;
}

export const AnimeItem = ({ anime }: AnimeItemProps) => {
  return (
    <TouchableOpacity className="flex-row" activeOpacity={0.7}>
      <View className="relative mr-3">
        <Image
          source={{ uri: anime.image }}
          contentFit="cover"
          style={{ width: 96, height: 128, borderRadius: 8 }}
          transition={200}
        />
        {anime.status === "ongoing" && (
          <View className="absolute left-1 top-1 rounded bg-green-500 px-2 py-1">
            <Text className="text-xs font-bold text-white">ONGOING</Text>
          </View>
        )}
      </View>
      <View className="flex-1">
        <Text
          className="mb-1 text-base font-semibold text-white"
          numberOfLines={2}
        >
          {anime.title}
        </Text>
        <View className="mb-1 flex-row items-center">
          <Text className="mr-2 text-xs text-gray-400">
            {anime.episodes} episodes
          </Text>
          {anime.rating && (
            <View className="flex-row items-center">
              <Text className="text-xs text-yellow-400">⭐</Text>
              <Text className="ml-1 text-xs text-yellow-400">
                {anime.rating}
              </Text>
            </View>
          )}
        </View>
        <View className="mb-2 flex-row flex-wrap">
          {anime.genre.slice(0, 3).map((genre, index) => (
            <View
              key={index}
              className="mb-1 mr-2 rounded bg-gray-700 px-2 py-1"
            >
              <Text className="text-xs text-gray-300">{genre}</Text>
            </View>
          ))}
        </View>
        <Text className="text-sm text-gray-400" numberOfLines={2}>
          {anime.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
