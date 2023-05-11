import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const MealItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default MealItem;
