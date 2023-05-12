import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const ids = useSelector((state) => state.favoriteMeals.ids);
  // const { ids } = useContext(FavoritesContext);
  const displayedMeals = ids.map((id) =>
    MEALS.find(({ id: mealId }) => mealId == id)
  );

  useLayoutEffect(() => {}, []);

  if (displayedMeals.length < 1)
    return (
      <View style={styles.root}>
        <Text style={styles.placeholder}>No favorites meals yet</Text>
      </View>
    );

  return <MealsList items={displayedMeals} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default FavoritesScreen;
