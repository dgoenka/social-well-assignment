import { View, Text, StyleSheet } from "react-native";

const SeekerDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Seeker Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
export default SeekerDetails;
