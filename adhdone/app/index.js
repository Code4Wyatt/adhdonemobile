import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <>
    <Stack.Screen options={{ title: "Home" }} style={{ color: 'white' }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Use the `Screen` component to configure the layout. */}
        
        {/* Use the `Link` component to enable optimized client-side routing. */}
        <Link href="/goals">Go to Details</Link>
      </View>
    </>
  );
}