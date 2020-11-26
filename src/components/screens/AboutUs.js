import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';


export default class AboutUs extends React.Component {

   

   render() {
      return (
         <View style={styles.container}>
            <StatusBar translucent backgroundColor="#3A48E3" />
      
            <View style={{
               backgroundColor: "#F1F7F7",
               flexDirection: 'row',
               justifyContent: 'space-between',
               paddingLeft: 10, paddingRight: 5,
               paddingTop: 40, paddingBottom: 15,
               borderBottomLeftRadius: 3,
               borderBottomRightRadius: 3,
               elevation: 5
            }}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                  <Image
                     source={require('../images/back.png')}
                     style={{ width: 25, height: 25, marginTop: 5 }}
                  />
               </TouchableOpacity>
               <Text style={{ fontSize: 20 }}>About Us</Text>
               <View style={{ flexDirection: 'row' }}>
               </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#F1F7F7' }}>
               <View style={{ height: 120, paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 16, paddingBottom:10, paddingTop:20 }}>Version 1.0</Text>
                  <View style={{ flexDirection: "row", paddingBottom:10 }}>
                     <Text style={{ fontSize: 16, color:"grey" }}>Developed By </Text>
                     <Text style={{ fontSize: 16 }}>Erect Pvt. Ltd.</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: "grey" }}>This app may collect anonymous usage of data.</Text>
               </View>
               <View style={{ borderWidth: 0.2, borderColor: 'grey' }}></View>
               <View style={{ alignItems: "center", padding: 10 }}>
                  <Text style={{ fontSize: 16 }}>  Copyright @ 2020  </Text>
                  <Text style={{ fontSize: 12, color: "grey" }}>Build version 1.1.1/1.0</Text>
               </View>
            </View>
            
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F1F7F7',
   },
});