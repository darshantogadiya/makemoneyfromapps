import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen3 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Roposo </Text>
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
                        }}>Roposo - Video Status, Earn Money, Friends Chat
</Text>
                     </View>

                     <Image
                        source={require('../images/roposo.png')}
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
                           fontWeight: "bold",
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>On Roposo four way to earn money!
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Invite to Friend:
                           It is type of game the app will randomly suggest you any name from your phonebook and  invite that friend on the app to earn coins, remember the member must sign up from the number you send link on.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Creating posts:
                           Create post & Earn cash.
                           When you create the post and gain the more views means more coins you will be a earn.
{"\n" + "1 post views = 1 coin" + "\n" +
                              "1 post views = 5 coins (use Roposo camera)."}

                        </Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Play Live Quiz
                           Everyday at 6:00 pm the app provides a live quiz where every user can participate and earn coins. So answer simple questions and win coins daily.
</Text>

                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Play Live Quiz
                           Daily check-in
                           You will also earn coins for just opening the app daily.

</Text>

                        <Text style={{
                           fontSize: 15,
                           marginBottom: 5,
                           textAlign: "justify"
                        }}>Must Read:</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 5,
                           textAlign: "justify"
                        }}>Amount will be transferred to you via PayTM so Signup using your Paytm number
                           each 1000 roposo coin is equal to Rs.1.
                           Coins earned this month will expire on the last day of the next month
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