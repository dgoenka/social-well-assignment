import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";

type Info = {
  title: string;
  subtitle: string;
};

type DashboardGridItemProps = {
  logoPath: any;
  heading: string;
  infos: Info[];
};

export const DashboardGridItem: React.FC<DashboardGridItemProps> = ({
  logoPath,
  heading,
  infos,
}) => {
  const [asset, error] = useAssets([logoPath]);
  return (
    <View style={dashboardGridItemStyles.gridItemRoot}>
      <View style={dashboardGridItemStyles.titleRow}>
        <Image
          style={dashboardGridItemStyles.titleRowImage}
          source={asset?.[0]?.localUri}
          contentFit={"contain"}
        />
        <Text>{heading}</Text>
      </View>
      {infos.map((info, index) => (
        <View style={dashboardGridItemStyles.infoSet} key={index}>
          <Text style={dashboardGridItemStyles.title}>{info.title}</Text>
          <Text style={dashboardGridItemStyles.subtitle}>{info.subtitle}</Text>
        </View>
      ))}
    </View>
  );
};

const dashboardGridItemStyles = StyleSheet.create({
  gridItemRoot: {
    flex: 1,
    width: "100%",
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#FFF9F7",
    padding: 15,
    margin: 7,
    borderRadius: 15,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  titleRowImage: { height: 28, width: 28 },
  infoSet: {
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 12,
  },
});

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Urban Local Bodies (ULBs)</Text>
      <FlatList
        style={styles.list}
        data={[
          {
            logoPath: require("../../../assets/images/dashboard/funds.svg"),
            heading: "Funds",
            infos: [
              { title: "Rs 280.22 cr", subtitle: "Total Funds Allocated" },
              { title: "Rs 80.22 cr", subtitle: "Funds Utilized" },
            ],
          },
          {
            logoPath: require("../../../assets/images/dashboard/wake_seeker.svg"),
            heading: "Wage-Seeker",
            infos: [
              { title: "Rs 280.22 cr", subtitle: "Total Funds Allocated" },
              { title: "Rs 80.22 cr", subtitle: "Funds Utilized" },
            ],
          },
          {
            logoPath: require("../../../assets/images/dashboard/organization.svg"),
            heading: "Community Organisation",
            infos: [
              { title: "Rs 280.22 cr", subtitle: "Total Funds Allocated" },
              { title: "Rs 80.22 cr", subtitle: "Funds Utilized" },
            ],
          },
          {
            logoPath: require("../../../assets/images/dashboard/finalised_work.svg"),
            heading: "Finalised Work",
            infos: [
              { title: "Rs 280.22 cr", subtitle: "Total Funds Allocated" },
              { title: "Rs 80.22 cr", subtitle: "Funds Utilized" },
            ],
          },
        ]}
        renderItem={({ item, index }) => (
          <DashboardGridItem key={index} {...item} />
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    padding: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
