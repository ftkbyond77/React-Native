import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Project from './screens/Project';
import { NavigationContainer } from '@react-navigation/native';
import ProjectStack from './navigations/ProjectStack';


export default function App() {
  return (
    <NavigationContainer>
        <ProjectStack />
    </NavigationContainer>
  );
}