import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { styles } from "../styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../app/index";
import { Ionicons as Icon } from "@expo/vector-icons";

type PickGenreProps = NativeStackScreenProps<RootStackParamList, "PickGenre">;

export default function PickGenre({ navigation }: PickGenreProps) {
  const genres = [
    "Pop",
    "Rock",
    "EDM",
    "Hardstyle",
    "Jazz",
    "Classical",
    "Rap",
    "Hip-Hop",
    "Country",
    "Funk",
    "RNB",
    "Soul",
    "Reggae",
    "Blues",
    "Metal",
  ];
  const [chosenGenre, setGenre] = useState("");

  return (
    <View style={tw`p-5 mt-10 h-90%`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-4`}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Pick a genre</Text>
      <View style={tw`flex-row flex-wrap justify-between gap-1 mx-2 mb-4`}>
        {genres.map((genre, index) => (
          <TouchableOpacity
            key={`${genre}-${index}`}
            onPress={() => setGenre(genre)}
            style={[
              styles.button,
              tw`px-5 py-2 items-center justify-center`,
              chosenGenre === genre
                ? tw`bg-white border-white shadow-blue-900`
                : styles.button,
            ]}
          >
            <Text
              style={[
                tw`text-lg font-bold`,
                chosenGenre === genre ? tw`text-gray-900` : tw`text-white`,
              ]}
            >
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={tw`mx-2 mb-6`}>
        <TouchableOpacity
          style={[
            styles.button,
            tw`p-3 items-center justify-center flex-row gap-3 align-middle`,
            chosenGenre === " " ? tw`bg-white border-white` : styles.button,
          ]}
          onPress={() => setGenre(" ")}
        >
          <Icon
            name="sparkles"
            size={24}
            color={chosenGenre === " " ? "black" : "white"}
          />
          <Text
            style={[
              tw`text-lg font-bold`,
              chosenGenre === " " ? tw`text-gray-900` : tw`text-white`,
            ]}
          >
            Surprise Me
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`absolute bottom-3 left-0 right-0 p-5`}>
        <TouchableOpacity
          style={[
            styles.button,
            tw`w-full h-20 flex-row items-center gap-4 justify-center`,
            chosenGenre ? tw`bg-blue-500` : styles.disabledButton,
          ]}
          disabled={!chosenGenre}
          onPress={() =>
            navigation.navigate("ShowSongs", { genre: chosenGenre })
          }
        >
          <Icon name="hardware-chip-outline" size={24} color="white" />
          <Text style={[tw`text-white font-bold text-2xl`]}>
            Generate Songs
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
