import * as React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import UploadPhoto from "../screens/UploadPhoto";
import PickGenre from "../screens/PickGenre";
import ShowSongs from "../screens/ShowSongs";

export type RootStackParamList = {
  UploadPhoto: undefined;
  PickGenre: undefined;
  ShowSongs: { genre: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
          <Stack.Screen name="PickGenre" component={PickGenre} />
          <Stack.Screen name="ShowSongs" component={ShowSongs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
