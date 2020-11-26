import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen1 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Play Loco</Text>
               <View style={{ flexDirection: 'row' }}>
               </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
               <ScrollView showsVerticalScrollIndicator= {false} style={{ marginBottom: 0 }}>
                  <View style={{ width: "95%", alignSelf: "center" }}>
                     <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{
                           fontSize: 20,
                           marginTop:10,
                           alignSelf: "center",
                           fontWeight: "bold"
                        }}>Loco - Play Free Games, Cricket, Live Trivia & Win</Text>
                     </View>

                     <Image
                                    source={require('../images/loco.jpeg')}
                                    resizeMode={'contain'}
                                    style={{
                                       marginTop:10,
                                        width: "100%",
                                        height: 180,
                                        borderRadius:20
                                    }} />

                     <View style={{ marginTop: 20 }}>
                        <Text style={{
                           fontSize: 15,
                           fontWeight: "bold",
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>On Loco three way to earn money!</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Loco Live: Every game has 10 questions and if you answer all correctly, you win lots of cash!!! The quiz questions range from politics, news, current affairs, GK, sports, history, geography, sciences, current trends, technology etc. If a general knowledge quiz is not your thing, don’t worry we have different non-trivia quiz games for you as well. Just join in for all the fun games!!!</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 5,
                           textAlign: "justify"
                        }}>Loco League: If you think you can answer questions about a future match because you love sports, this game is for you. If you are a champ at other league games, you will fit right in. Cricket, football, tennis - we have all kinds of games on Loco League.</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>Loco Arena: You have played lots of different games on your mobile, now you can also win money for playing! Play bubble shooter, jungle gems, airwar, tetroid and show up on the leaderboard and show India your talent.</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 5,
                           textAlign: "justify"
                        }}>Must Read:</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 5,
                           textAlign: "justify"
                        }}>Amount will be transferred to you via PayTM so Signup using your Paytm number</Text>
                       
                        


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