import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    textAlign: "center",
  },
});

export default List;
