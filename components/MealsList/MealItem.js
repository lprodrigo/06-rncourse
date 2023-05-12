import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={style.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? style.buttonPressed : null)}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={style.image} />
          <Text style={style.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  image: { width: "100%", height: 200 },
  title: { fontWeight: "bold", textAlign: "center", fontSize: 18, margin: 8 },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadow: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
