import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";

const SeekerDetails = () => {
  const [assets, error] = useAssets([
    require("../../../assets/images/view-seeker/User.png"),
  ]);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={assets?.[0]?.uri}
          contentFit={"contain"}
          style={styles.userImage}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.nameHeader}>Sunakar Biswal</Text>
          <Text style={styles.nameSubHeader}>B2191216</Text>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowItemLeft]}>Gender</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.tableRowItemRight]}>Male</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowItemLeft]}>Aadhaar ID</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.tableRowItemRight]}>0000 0000 0000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowItemLeft]}>Date of Birth</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.tableRowItemRight]}>18/11/98</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowItemLeft]}>Social Category</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.tableRowItemRight]}>OBC</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowItemLeft]}>Skills</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.tableRowItemRight]}>Carpenter</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowItemLeft]}>Disability</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={[styles.tableRowItemRight]}>No</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    gap: 20,
  },
  sectionContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  tableRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  tableRowItemLeft: {
    flex: 1,
    fontSize: 20,
    color: "black",
  },
  tableRowItemRight: {
    flex: 1,
    fontSize: 20,
    color: "darkgrey",
  },
  userImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  nameHeader: {
    fontSize: 24,
    color: "black",
  },
  nameSubHeader: {
    fontSize: 20,
    color: "darkgrey",
  },
  colon: {
    fontSize: 20,
    color: "black",
  },
});
export default SeekerDetails;
