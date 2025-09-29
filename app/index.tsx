import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { styles } from "../styles";
import tw from "twrnc";

export default function Index() {
  const genres = ["Pop", "Rock", "EDM", "Hardstyle", "Jazz", "Classical"];
  const [chosenGenre, setGenre] = useState("");

  return (
    <View>
      <View style={tw`p-5`}>
        <Text style={styles.title}>Enter a photo</Text>
        <TouchableOpacity
          style={tw`border-2 border-dashed align-middle items-center p-10 rounded-lg`}
        >
          <Text>Add a photo</Text>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`p-5`}>
        <Text style={styles.title}>Pick a genre</Text>
        <View style={[tw`flex-row justify-around mx-5 mb-6`]}>
          {genres.map((genre) => (
            <TouchableOpacity
              key={genre}
              onPress={() => {
                setGenre(genre);
              }}
              style={[
                styles.card,
                tw`rounded-md align-middle items-center p-1`,
                chosenGenre === genre
                  ? { backgroundColor: "#c2c2c2" }
                  : { backgroundColor: "transparent" },
              ]}
            >
              <Text style={tw`text-sm`}>{genre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={tw`justify-center items-center`}>
        <TouchableOpacity style={tw`border-4 p-5 rounded-xl bg-white`}>
          <Text style={styles.title}>Generate Songs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
