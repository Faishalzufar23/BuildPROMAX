import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const noHead = { headerShown: false };

const StackLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={noHead} />
        <Stack.Screen name="index" options={noHead} />
        <Stack.Screen name="news-detail" options={noHead} />
        <Stack.Screen name="web" options={noHead} />
        <Stack.Screen name="pk" options={noHead} />
        <Stack.Screen name="tb" options={noHead} />
        <Stack.Screen name="pkul" options={noHead} />
        <Stack.Screen name="pm" options={noHead} />
        <Stack.Screen name="login" options={noHead} />
        <Stack.Screen name="register" options={noHead} />

      </Stack>
    </GluestackUIProvider>
  );
};

export default StackLayout;