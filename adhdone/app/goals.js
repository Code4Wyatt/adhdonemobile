import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Goals() {
  const router = useRouter();
  return (
    <View>
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}

        style={{ marginTop: 20, color: "blue" }}
      >
        Details Screen
      </Text>
    </View>
  );
}