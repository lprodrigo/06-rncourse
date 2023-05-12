import { useLayoutEffect, useMemo } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    [categoryId]
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, []);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
