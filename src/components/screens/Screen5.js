import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen5 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Roz Dhan</Text>
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
                        }}>Roz Dhan: Earn Money, Read News, and Play Games</Text>
                     </View>

                     <Image
                        source={require('../images/rozdhan.png')}
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
                        }}>Earn Cash Daily through this Income App. Browse through amazing content while you Play and Earn Paytm Cash from this Free Money app.</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>1) Top Earning App: You can earn unlimited Money from Roz Dhan. Users who ranked on top of the list earn more than Rs 40,000 Paytm Cash. Earn your first Rs 50 as sign up bonus. You can Refer and Earn. Once you earn Rs 200 or more, withdraw the amount through Paytm at any time.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>A) INVITE FRIENDS: Earn money with this Earning Apps by inviting your friends. You will also Win Paytm Cash when your friends invite their friends to our App.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>B) CHECK-IN: Roz Dhan is a Paytm Cash Earning Apps With Daily Bonus. Win Daily from this Real Cash Winning App by just opening the App daily and performing check-in. It is a Free Earn Money App to Earn Paytm Cash for Self Income. Use this Earn App which is the Best Earning App for Paytm.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>C) SHARE: Not interested in reading articles? Roz Dhan Cash Earning Apps lets you earn even when you Share content with your friends. Try this Paytm earn Money App to see for yourself.

</Text><Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>D) PLAY GAMES: While Gaming Apps charge money from you, Roz Dhan Lets you Play and Earn Paytm Cash. Earn Real Money and withdraw them through Paytm Apps while you make full use of this Enjoy App and Earn Money Apps.4

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