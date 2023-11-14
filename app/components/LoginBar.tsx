import {
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { DrawerActions, NavigationProp } from "@react-navigation/core";
import { useState } from "react";

type LoginBarProps = {
  navigation: NavigationProp<any>;
};

const LoginBar: React.FC<LoginBarProps> = ({ navigation }) => {
  const [searchPrompt, setSearchPrompt] = useState("");

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const onSearchSubmit = () => {};

  return (
    <View style={styles.root}>
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={openDrawer}>
          <FontAwesome name={"bars"} size={24} color={"#484C56"} />
        </TouchableOpacity>
        <TextInput
          placeholder={"Search"}
          style={{
            backgroundColor: "transaparent",
            borderWidth: 0,
            borderColor: "transparent",
            flex: 1,
            fontSize: 20,
          }}
          value={searchPrompt}
          onChangeText={setSearchPrompt}
        />
        <TouchableOpacity
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: 42,
            aspectRatio: 1,
          }}
          onPress={openDrawer}
        >
          <EvilIcons name="user" size={42} color={"#484C56"} style={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 8,
    borderRadius: 32,
    borderWidth: 1,
    gap: 20,
    borderColor: "#484C56",
    backgroundColor: "#FFF9F7",
  },
});

export default LoginBar;
