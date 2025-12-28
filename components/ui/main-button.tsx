import { Pressable, Text } from "react-native";

interface MainButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const MainButton = ({ children, onPress }: MainButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="h-12 items-center justify-center rounded-xl bg-indigo-500 active:opacity-80"
    >
      <Text className="text-base font-semibold text-white">{children}</Text>
    </Pressable>
  );
};
