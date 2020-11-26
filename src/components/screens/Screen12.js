import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen12 extends React.Component {

   

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
               <Text style={{ fontSize: 20 }}>Sudoku</Text>
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
                        }}>Sudoku - Make Money Free</Text>
                     </View>

                     <Image
                        source={require('../images/sudoku.png')}
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
                        }}>Sudoku is the only app where you can MAKE REAL MONEY PLAYING FREE VIDEO GAMES!
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>All you need to do is play any of our games and collect at least one ticket to be entered into the frequent cash prize draws.  The more tickets you collect the higher your chance of winning the cash prize!  Check back at draw time to see if your name is on the winning ticket! The winning prize is paid out through a Paypal money transfer.
</Text>
                        <Text style={{
                           fontSize: 15,
                           marginBottom: 15,
                           textAlign: "justify"
                        }}>It's very simple, every draw we are sharing back a portion of our advertising revenue with one lucky winner.  The larger our user base grows the more dollars we will give back. There are no in app purchases and no paying to win.  We are calling our model Free-2-Win and we are very proud of it, so download Sudoku and check it out for your chance to win free cash!  Why would you play anything else?
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