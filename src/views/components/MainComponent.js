import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home"
import Cari from "../screens/Cari"
import Profile from "../screens/Profile"
import colors from '../../consts/colors'

export class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLabel: {
        home: "Home",
        cari: "Cari",
        profile: "Profile"
      },
    };
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName={this.state.navLabel.home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === this.state.navLabel.home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === this.state.navLabel.cari) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === this.state.navLabel.profile) {
              iconName = focused ? "person" : "person-outline";
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: [{ display: "flex", 
            position: 'absolute',
            bottom: 20,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 15,
            }],
          tabBarActiveTintColor: colors.darkblue ,
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 12, paddingBottom: 3 },
        })}
      >

        <Tab.Screen name={this.state.navLabel.home} component={Home} options={{
              headerShown: false,
            }}/>
        <Tab.Screen name={this.state.navLabel.cari} component={Cari} options={{
              headerShown: false,
            }}/>
        <Tab.Screen name={this.state.navLabel.profile} component={Profile} options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {fontWeight: 'bold'},
              headerStyle:{backgroundColor: colors.blue},
            }}/>

      </Tab.Navigator>
    );
  }
}
export default MainComponent;
