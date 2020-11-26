import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen8 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Poll Pay</Text>
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
                        }}>Poll Pay: Make Money, Swag & Gift Cards w/ Surveys</Text>
                     </View>

                     <Image
                        source={require('../images/Poll_Pay.png')}
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
                        }}>make money with surveys. Real rewards and free gift cards are waiting for you! Earn money with surveys if you are smart! Poll Pay is leading in the survey apps that pay cash. Earn money from home if you search an alternative job.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Loco League: If you think you can answer questions about a future match because you love sports, this game is for you. If you are a champ at other league games, you will fit right in. Cricket, football, tennis - we have all kinds of games on Loco League.</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>{"What are the free rewards?" + "\n"}
                           {"1) Amazon gift card" + "\n"}
                           {"2) Xbox gift card" + "\n"}
                           {"3) Netflix gift card" + "\n"}
                           {"4) GooglePlay gift card" + "\n"}
                           {"5) PayPal balance" + "\n"}
                        </Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Surveys for cash: The dream job for everyone! But there are not many survey apps that pay cash. Poll Pay is one of the only well working survey apps that pay cash!
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>You always wanted to improve your pocket money, or you just wanted to earn something with your mobile phone?
</Text>

                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Invite your friends to Poll Pay and earn extra free cash for each invite. Just share your referral or invite code and start earning credits.

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