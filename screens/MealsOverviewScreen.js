import { View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { useEffect, useLayoutEffect, useMemo } from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    [categoryId]
  );

  const renderMealItem = (itemData) => {
    return <MealItem {...itemData.item} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen</Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });

export default MealsOverviewScreen;
