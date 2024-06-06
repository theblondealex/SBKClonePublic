import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Signup/Phone" options={{ headerShown: false }} />
      <Stack.Screen name="Signup/ConfirmPhone" options={{ headerShown: false }} />
      <Stack.Screen name="Signup/Details" options={{ headerShown: false }} />
      <Stack.Screen name="Signup/EmailPass" options={{ headerShown: false }} />
      <Stack.Screen name="Signup/Promo" options={{ headerShown: false }} />
      <Stack.Screen name="(HomeTabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="Signup/CountriesSelect"
        options={{
          animationDuration: 200,
          gestureDirection: 'vertical',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
