import { TextInput, View } from "react-native";

interface MainInputProps extends React.ComponentProps<typeof TextInput> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const MainInput = ({
  icon,
  iconPosition = "left",
  className,
  placeholderTextColor = "#9CA3AF",
  ...props
}: MainInputProps) => {
  return (
    <View className="flex-row items-center rounded-lg bg-gray-800 px-4 py-3">
      {iconPosition === "left" && icon}
      <TextInput
        className={`flex-1 ${className}`}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {iconPosition === "right" && icon}
    </View>
  );
};
