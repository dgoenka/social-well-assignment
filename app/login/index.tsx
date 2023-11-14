import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { LoginImageAssets } from "../_layout";

export default function ModalScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const assets = useContext(LoginImageAssets);
  const handleFormSubmit = () => {
    const problems = [];
    if (!username) problems.push("Username cannot be blank");
    if (!password) problems.push("Password cannot be blank");
    if (problems.length > 0) alert(problems.join("\n"));
    else router.replace("/home");
  };
  const handleForgotUserName = () => {
    alert("Contact Administrator");
  };
  const handleForgotPassword = () => {
    alert("Contact Administrator");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={assets?.[0]?.uri} />
      <View style={styles.loginFormPosition}>
        <View style={styles.loginFormLayout}>
          <Image style={styles.companyLogo} source={assets?.[1]?.uri} />
          <View style={styles.loginFormFields}>
            <TextInput
              placeholder={"Username"}
              value={username}
              onChangeText={setUsername}
              style={styles.loginFormField}
            />
            <TouchableOpacity
              style={styles.forgotLine}
              onPress={handleForgotUserName}
            >
              <Text style={styles.forgotLineText}>Forgot Username?</Text>
            </TouchableOpacity>
            <TextInput
              placeholder={"Password"}
              value={password}
              onChangeText={setPassword}
              style={styles.loginFormField}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.forgotLine}
              onPress={handleForgotUserName}
            >
              <Text style={styles.forgotLineText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleFormSubmit}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  companyLogo: {
    height: 100,
    width: 100,
  },
  loginFormPosition: {
    position: "absolute",
    top: "20%",
    bottom: 0,
    right: "20%",
    left: 0,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(255,255,255,0.90)",
  },
  loginFormLayout: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
  },
  loginFormField: {
    width: "80%",
    maxWidth: 300,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#484C56",
  },
  loginFormFields: {
    gap: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
  },
  forgotText: {
    color: "#DD6B20",
    alignSelf: "flex-end",
  },
  loginButton: {
    backgroundColor: "#DD6B20",
    color: "white",
    padding: 15,
    width: "80%",
    maxWidth: 300,
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
  },

  forgotLine: {
    backgroundColor: "transparent",
    color: "white",
    width: "80%",
    maxWidth: 300,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  forgotLineText: {
    color: "#DD6B20",
    textAlign: "left",
  },
});
