import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function PopupScreen() {
  const router = useRouter();

  return (
    <View style={{ gap: 12, padding: 12 }}>
      <Text style={{ fontSize: 28, fontWeight: "600", textAlign: "center" }}>
        This is a modal screen
      </Text>

      <View style={{ gap: 24 }}>
        <Pressable
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            backgroundColor: "black",
            borderWidth: 1,
            borderRadius: 50,
          }}
          onPress={() => router.navigate("/(tabs)")}
        >
          <Text
            style={{ color: "white", fontWeight: "600", textAlign: "center" }}
          >
            Save + Navigate
          </Text>
        </Pressable>

        <Pressable
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            backgroundColor: "black",
            borderWidth: 1,
            borderRadius: 50,
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{ color: "white", fontWeight: "600", textAlign: "center" }}
          >
            Save + Go Back
          </Text>
        </Pressable>

        <Pressable
          style={{
            paddingVertical: 14,
            paddingHorizontal: 12,
            backgroundColor: "black",
            borderWidth: 1,
            borderRadius: 50,
          }}
          onPress={() => router.push("/(tabs)")}
        >
          <Text
            style={{ color: "white", fontWeight: "600", textAlign: "center" }}
          >
            Save + Push
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
