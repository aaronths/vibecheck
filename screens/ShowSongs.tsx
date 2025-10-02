import { searchTracks, trackType } from "@/utils/SpotifySearchFnc";
import { Ionicons as Icon } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { styles } from "../styles";

type RootStackParamList = {
  ShowSongs: { genre: string };
};

type ShowSongsProps = NativeStackScreenProps<RootStackParamList, "ShowSongs">;

export default function ShowSongs({ route, navigation }: ShowSongsProps) {
  const { genre } = route.params || {};
  const [loading, setLoading] = React.useState(false);
  const [songs, setSongs] = React.useState<trackType[]>([]);
  const getSongs = async () => {
    setLoading(true);
    const returnSongs = await searchTracks(genre);
    setSongs(returnSongs);
    setLoading(false);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <View style={tw`p-5 mt-10 h-90%`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-4`}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.title]}>Here are your recommended songs:</Text>
      {loading ? (
        <Text style={tw`text-lg mt-4`}>Loading...</Text>
      ) : (
        songs.map((track, index) => (
          <View key={index} style={[styles.button]}>
            <Text style={tw`text-lg font-bold text-white`}>{`${index + 1}. ${
              track.name
            } - ${track.artists[0].name}`}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(track.external_urls.spotify)}
              style={tw`flex flex-row items-center mt-2 gap-2`}
            >
              <Text style={tw`text-white`}>Open in Spotify</Text>
              <Icon name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );
}
