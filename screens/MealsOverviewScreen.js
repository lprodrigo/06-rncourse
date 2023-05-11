import { View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals overview screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });

export default MealsOverviewScreen;
