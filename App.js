import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import colors from './src/consts/colors';
import MainComponent from './src/views/components/MainComponent';
import Home from './src/views/screens/Home';
import Materi from './src/views/screens/Materi/Materi';
import Authentifications from './src/views/screens/Authentifications/Authentifications';
import Signin from './src/views/screens/Authentifications/Signin';
import Signup from './src/views/screens/Authentifications/Signup';
import Nilai from './src/views/screens/Nilai/NilaiScreen';
import Profile from './src/views/screens/Profile';
import MTK from './src/views/screens/Materi/MTK/ListMateriMTK';
import DetailMTK from './src/views/screens/Materi/MTK/DetailMateriMTK';
import Ind from './src/views/screens/Materi/B.Indo/ListMateriIndo';
import DetailInd from './src/views/screens/Materi/B.Indo/DetailMateriIndo';
import ListQuiz from './src/views/screens/ListQuiz';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import Splash from './src/views/screens/SplashScreen';
import Quiz from './src/views/screens/Quiz/App';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen
            name="Authentifications"
            component={Authentifications}
          />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="Main"
            component={MainComponent}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Materi"
            component={Materi}
            options={{
              headerTitle: 'Materi',
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="ListQuiz"
            component={ListQuiz}
            options={{
              headerTitle: 'Quiz',
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{
              headerTitle: 'Quiz',
              headerShown: false,
              gestureEnabled: true,
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen
            name="Nilai"
            component={Nilai}
            options={{
              headerTitle: 'Nilai',
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="MTK"
            component={MTK}
            options={{
              headerTitle: 'Matematika',
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="DetailMTK"
            component={DetailMTK}
            options={{
              headerStyle:{backgroundColor: colors.blue},
              headerTitle: 'Matematika',
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Ind"
            component={Ind}
            options={{
              headerTitle: 'Bahasa Indonesia',
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="DetailInd"
            component={DetailInd}
            options={{
              headerTitle: 'Bahasa Indonesia',
              headerStyle:{backgroundColor: colors.blue},
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: 'Back',
              headerTitleAlign: 'center',
            }}
          />   
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
