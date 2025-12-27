import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function ProfilePage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Profile Page</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

