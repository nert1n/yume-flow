import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TitlePage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Title Page</Text>
      </View>
    </SafeAreaView>
  );
}
