import {
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/Colors";
import LoginBar from "../components/LoginBar";
import { Drawer } from "expo-router/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const openDrawer = () => {};
  return (
    <SafeAreaView style={styles.tabbedPageRoot}>
      <View style={styles.tabbedPageHolder}>
        <Drawer
          screenOptions={{
            header: ({ navigation }) => <LoginBar navigation={navigation} />,
          }}
        >
          <Drawer.Screen
            name="main"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: () => (
                <FontAwesome
                  size={28}
                  style={{ marginBottom: -3 }}
                  name={"home"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="add/index"
            options={{
              drawerLabel: "Add",
              title: "Add Wage Seeker",
              drawerIcon: () => (
                <FontAwesome
                  size={28}
                  style={{ marginBottom: -3 }}
                  name={"plus"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="seeker/index"
            options={{
              drawerItemStyle: { height: 0, width: 0, opacity: 0 },
            }}
          />
        </Drawer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabbedPageRoot: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  tabbedPageHolder: {
    flex: 1,
    backgroundColor: "white",
  },
});
