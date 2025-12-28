import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AnimeList } from "@/components/news/anime-list";

export default function NewsPage() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar style="light" />
      <AnimeList />
    </SafeAreaView>
  );
}
