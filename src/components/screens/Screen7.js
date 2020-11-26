import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen7 extends React.Component {

   

   render() {
      return (
         <View style={styles.container}>
            <StatusBar translucent backgroundColor="#3A48E3" />
       
            <View style={{
               backgroundColor: "#F2F2F2",
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
               <Text style={{ fontSize: 20 }}>Work From Home Jobs</Text>
               <View style={{ flexDirection: 'row' }}>
               </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
               <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 0 }}>
                  <View style={{ width: "95%", alignSelf: "center" }}>
                     <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{
                           fontSize: 20,
                           marginTop: 10,
                           alignSelf: "center",
                           fontWeight: "bold"
                        }}>Work From Home Jobs, Resell & Earn Money Online</Text>
                     </View>

                     <Image
                        source={require('../images/work-from-home.png')}
                        resizeMode={'contain'}
                        style={{
                           width: "100%",
                           height: 180,
                           borderRadius: 20,
                           marginTop: 10
                        }} />

                     <View style={{ marginTop: 20 }}>

                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>PICK products from our trendy catalogues and unique festive collections every week
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>SHARE product images directly to your Facebook wall, Facebook marketplace, WhatsApp groups, Sharechat profile and more to get leads and orders.
.</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>EARN - Fill in your customer's complete address and select payment options. Your margin will be credited directly into your bank account after delivery of the product.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 5,
                           textAlign: "justify"
                        }}>That’s it! Making money online is this simple!
</Text>

                       

                   


                     </View>
                  </View>
               </ScrollView>
               
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
});