import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './index'; // Supondo que sua tela index está em 'index.tsx'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ headerShown: false }} // Oculta o header
      />
    </Stack.Navigator>
  );
}
