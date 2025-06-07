import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons'


export default function TabLayout() {
  const colorScheme = useColorScheme();

  const iconActiveColor = "#90D5FF";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarActiveTintColor: iconActiveColor,
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="News"
        options={{
          tabBarActiveTintColor: iconActiveColor,
          title: 'News',
          tabBarIcon: ({ color }) => 
          <IconSymbol size={28} name="newspaper" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Startlistor"
        options={{
          tabBarActiveTintColor: iconActiveColor,
          title: 'Startlistor',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Speltips"
        options={{
          tabBarActiveTintColor: iconActiveColor,
          title: 'Speltips',
          tabBarIcon: ({ color }) => <IconSymbol name="info" size={28}  color={color} />,
        }}
      />
    </Tabs>
  );
}
