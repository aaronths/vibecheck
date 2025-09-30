import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { styles } from "../styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons as Icon } from "@expo/vector-icons";

type RootStackParamList = {
  ShowSongs: { genre: string };
};

type ShowSongsProps = NativeStackScreenProps<RootStackParamList, "ShowSongs">;

export default function ShowSongs({ route, navigation }: ShowSongsProps) {
  const { genre } = route.params || {};

  return (
    <View style={tw`p-5 mt-10 h-90%`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-4`}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.title]}>Songs</Text>
      {/* FILLER SONGS FOR NOW */}
      <Text style={tw`text-gray-500 italic text-lg`}>Put the songs here</Text>
    </View>
  );
}
