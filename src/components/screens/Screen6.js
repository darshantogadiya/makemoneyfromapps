import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen6 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Pocket Money</Text>
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
                        }}>Pocket Money: Free Mobile Recharge & Wallet Cash</Text>
                     </View>

                     <Image
                        source={require('../images/pocket-money.png')}
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
                        }}>If you are searching for an app to recharge your mobile for free or instant paytm cash earning app then try pocket money.
{"\n" + "Earn Free Mobile Recharges or Wallet cash worth upto ₹7000 daily by completing easy tasks."}</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Install Apps from Pocket Money Offerwall and get rewards on registering on the app.
                           {"\n" + "• Find Latest Offer & Complete high earning offers to earn more money." + "\n"}
                           {"• Visit the App Daily to avail new offers." + "\n"}
                           {"• Earn Daily bonus on your 1st app register" + "\n"}
                           {"• Get cashback & amazing discount on availing offers." + "\n"}
                           {"• Earn Upto ₹160 daily by inviting friends." + "\n"}
                           {"• Participate in weekly contest to earn more & big money prizes" + "\n"}
                           {"• Fill surveys or another tasks to earn rewards." + "\n"}
                           {"• Play Online Games & Earn Money" + "\n"}
                           {"• Get Free Mobile Recharges or Unlimited Paytm Cash"}
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