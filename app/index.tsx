import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-1 items-center justify-center gap-4">
        <Text className="text-2xl font-bold">News Page</Text>
        <Link href="/title" className="text-blue-500 underline">
          Go to Title
        </Link>
        <Link href="/profile" className="text-blue-500 underline">
          Go to Profile
        </Link>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
