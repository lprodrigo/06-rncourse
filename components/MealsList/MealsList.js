import { StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ items }) => {
  const { navigate } = useNavigation();

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        {...itemData.item}
        onPress={() => navigate("MealDetails", { mealId: itemData.item.id })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });

export default MealsList;
