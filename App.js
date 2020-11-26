import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator, TransitionPresets  } from 'react-navigation-stack';
import Home from './src/components/screens/Home';
import Screen1 from './src/components/screens/Screen1';
import Screen2 from './src/components/screens/Screen2';
import Screen3 from './src/components/screens/Screen3';
import Screen4 from './src/components/screens/Screen4';
import Screen5 from './src/components/screens/Screen5';
import Screen6 from './src/components/screens/Screen6';
import Screen7 from './src/components/screens/Screen7';
import Screen8 from './src/components/screens/Screen8';
import Screen9 from './src/components/screens/Screen9';
import Screen10 from './src/components/screens/Screen10';
import Screen11 from './src/components/screens/Screen11';
import Screen12 from './src/components/screens/Screen12';
import Screen13 from './src/components/screens/Screen13';
import AboutUs from './src/components/screens/AboutUs';


const StackActivity = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false
    }),
  },
});
const Screen1Activity = createStackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen2Activity = createStackNavigator({
  Screen2: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen3Activity = createStackNavigator({
  Screen3: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen4Activity = createStackNavigator({
  Screen4: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen5Activity = createStackNavigator({
  Screen5: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen6Activity = createStackNavigator({
  Screen6: {
    screen: Screen6,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen7Activity = createStackNavigator({
  Screen7: {
    screen: Screen7,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen8Activity = createStackNavigator({
  Screen8: {
    screen: Screen8,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen9Activity = createStackNavigator({
  Screen9: {
    screen: Screen9,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen10Activity = createStackNavigator({
  Screen10: {
    screen: Screen10,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen11Activity = createStackNavigator({
  Screen11: {
    screen: Screen11,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen12Activity = createStackNavigator({
  Screen12: {
    screen: Screen12,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const Screen13Activity = createStackNavigator({
  Screen13: {
    screen: Screen13,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});
const AboutUsActivity = createStackNavigator({
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }),
  },
});

const customDrawerComponent = (props) => (
  <ScrollView>
    <View style={{

    }}>
      <ImageBackground
        resizeMode='contain'
        source={require("./src/components/images/mainImage.jpg")}
        style={{ width: 280, height: 280, marginTop: -50, marginBottom: -50 }}
      >
      <View style = {{ marginTop:170, paddingLeft: 10}}>
      <Text style={{  fontSize:20, color: "white" }}>Make Money From Apps</Text>
        <Text style={{  fontSize:15, color: "white" }}>Erect Infotech</Text>
      </View>
      </ImageBackground>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </ScrollView>
)

const DrawerNavigatorExample = createDrawerNavigator({
  Home: {
    screen: StackActivity,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: <Image source={require("./src/components/images/home.png")} style={{ width: 20, height: 20 }}></Image>
    },
  },
  Screen1: {
    screen: Screen1Activity,
    navigationOptions: {
      drawerLabel: 'Loco',
    },
  },
  Screen2: {
    screen: Screen2Activity,
    navigationOptions: {
      drawerLabel: 'Google Opinion Rewards',
    },
  },
  Screen3: {
    screen: Screen3Activity,
    navigationOptions: {
      drawerLabel: 'Roposo',
    },
  },
  Screen4: {
    screen: Screen4Activity,
    navigationOptions: {
      drawerLabel: 'mCent Browser',
    },
  },
  Screen5: {
    screen: Screen5Activity,
    navigationOptions: {
      drawerLabel: 'Roz Dhan',
    },
  },
  Screen6: {
    screen: Screen6Activity,
    navigationOptions: {
      drawerLabel: 'Pocket Money',
    },
  },
  Screen7: {
    screen: Screen7Activity,
    navigationOptions: {
      drawerLabel: 'Work From Home',
    },
  },
  Screen8: {
    screen: Screen8Activity,
    navigationOptions: {
      drawerLabel: 'Poll Pay',
    },
  },
  Screen9: {
    screen: Screen9Activity,
    navigationOptions: {
      drawerLabel: 'Make Money',
    },
  },
  Screen10: {
    screen: Screen10Activity,
    navigationOptions: {
      drawerLabel: 'Play Quiz',
    },
  },
  Screen11: {
    screen: Screen11Activity,
    navigationOptions: {
      drawerLabel: ' Math Cash',
    },
  },
  Screen12: {
    screen: Screen12Activity,
    navigationOptions: {
      drawerLabel: 'Sudoku',
    },
  },
  Screen13: {
    screen: Screen13Activity,
    navigationOptions: {
      drawerLabel: 'Earn Talktime',
    },
  },

},
  {
    contentComponent: customDrawerComponent,
  }
);

export default createAppContainer(DrawerNavigatorExample);