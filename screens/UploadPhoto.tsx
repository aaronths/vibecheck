import { Text, TouchableOpacity, View, Image, Alert } from "react-native";
import tw from "twrnc";
import { styles } from "../styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../app/index";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Ionicons as Icon } from "@expo/vector-icons";

type UploadPhotoProps = NativeStackScreenProps<
  RootStackParamList,
  "UploadPhoto"
>;

export default function UploadPhoto({ navigation }: UploadPhotoProps) {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const requestMediaLibraryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Allow photo library access to continue."
      );
      return false;
    }
    return true;
  };

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "Allow camera access to continue.");
      return false;
    }
    return true;
  };

  const pickFromLibrary = async () => {
    const ok = await requestMediaLibraryPermission();
    if (!ok) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.9,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.canceled && result.assets && result.assets[0]?.uri) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const ok = await requestCameraPermission();
    if (!ok) return;
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.9,
      allowsEditing: true,
      aspect: [1, 1],
    });
    if (!result.canceled && result.assets && result.assets[0]?.uri) {
      setPhotoUri(result.assets[0].uri);
    }
  };
  return (
    <View style={tw`p-5 mt-20`}>
      <Text style={styles.title}>Select Your Photo</Text>
      <View
        style={tw`border-2 border-dashed rounded-lg w-full h-50% mt-5 border-gray-300 items-center justify-center bg-gray-200 shadow-md`}
      >
        {photoUri ? (
          <Image
            source={{ uri: photoUri }}
            style={tw`w-full h-100% rounded-lg`}
          />
        ) : (
          <>
            <Icon name="image" size={50} color="gray" />
            <Text style={tw`text-gray-500 italic text-lg`}>Add a photo</Text>
          </>
        )}
      </View>

      {photoUri && (
        <TouchableOpacity
          onPress={() => setPhotoUri(null)}
          style={[
            styles.button,
            tw`bg-gray-500 flex-row items-center align-middle justify-center gap-3`,
          ]}
        >
          <Icon name="close" size={24} color="white" />
          <Text style={styles.buttonText}>Remove Photo</Text>
        </TouchableOpacity>
      )}
      <View style={tw`py-5`}>
        <TouchableOpacity
          style={[
            styles.button,
            tw`flex-row items-center align-middle justify-center gap-3`,
          ]}
          onPress={pickFromLibrary}
        >
          <Icon name="images" size={24} color="white" />
          <Text style={styles.buttonText}>Add Photo from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            tw`flex-row items-center align-middle justify-center gap-3`,
          ]}
          onPress={takePhoto}
        >
          <Icon name="camera" size={24} color="white" />
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>

      {photoUri && (
        <View style={tw`absolute bottom-0 left-0 right-0 p-5`}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PickGenre");
            }}
            style={[
              styles.button,
              tw`w-full h-12 flex-row items-center justify-center bg-blue-300 shadow-xl`,
            ]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
