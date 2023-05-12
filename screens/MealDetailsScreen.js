import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

import { MEALS } from "../data//dummy-data";
import MealDetails from "../components/MealDetails";
import { StyleSheet } from "react-native";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const ids = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  const mealIsFavorite = ids.includes(mealId);

  const handleButtonPressHandler = () => {
    !mealIsFavorite
      ? dispatch(addFavorite({ id: mealId }))
      : dispatch(removeFavorite({ id: mealId }));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          title="Hello"
          onPress={handleButtonPressHandler}
          color="white"
          icon={mealIsFavorite ? "star" : "star-outline"}
        />
      ),
    });
  }, [navigation, handleButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails {...selectedMeal} textStyle={styles.textStyle} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { marginBottom: 16 },
  image: { width: "100%", height: 350 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailsScreen;
