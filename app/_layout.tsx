import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { createContext, useEffect } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Asset, useAssets } from "expo-asset";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const LoginImageAssets = createContext<Asset[] | undefined>(undefined);

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  const [assets, assetError] = useAssets([
    require("../assets/images/login/login_bg.jpeg"),
    require("../assets/images/login/companylogo.png"),
  ]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error || assetError) throw error;
  }, [error, assetError]);

  useEffect(() => {
    if (loaded && (assets?.length || 0) > 0) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <LoginImageAssets.Provider value={assets}>
      <RootLayoutNav />
    </LoginImageAssets.Provider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView
        style={[
          StyleSheet.absoluteFill,
          Platform.OS === "android" && (StatusBar?.currentHeight || 0) > 0
            ? { paddingTop: StatusBar.currentHeight }
            : {},
        ]}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="login"
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="home"
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
