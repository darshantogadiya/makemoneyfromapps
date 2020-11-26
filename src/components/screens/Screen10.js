import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen10 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Play Quiz</Text>
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
                        }}>Play Quiz: Get Coins,Wallet Cash,Talktime Recharge
</Text>
                     </View>

                     <Image
                        source={require('../images/play-quize.jpg')}
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
                        }}>How to earn coins on TaskBucks ?
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}> {"Play & win Quizzes :" + "\n"}
                           {"• Complete Digital tasks on phone as per provided steps & get coins" + "\n"}
                           {"• Invite friends and earn referral rewards" + "\n"}
                           {"• Participate in daily contests to win Free Mobile Recharges" + "\n"}
                        </Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>{"How can you use your TaskBucks coins ?" + "\n"}
                           {"• Take mobile recharges" + "\n"}
                           {"• Transfer your TaskBucks coins to your Paytm or Mobikwik wallet" + "\n"}
                           {"• Participate in daily contests to win EXTRA Coins" + "\n"}
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