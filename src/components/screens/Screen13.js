import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen13 extends React.Component {

    componentDidMount() {
        Util.adInitlize()
    }
  
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
                    <Text style={{ fontSize: 20 }}>Earn Talktime </Text>
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
                                }}>Earn Talktime - Get Recharges, Vouchers, & more!</Text>
                            </View>

                            <Image
                                source={require('../images/earntalktime.png')}
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
                                }}>{"Earn Talktime – Providing FREEDOM from paid recharges for LIFE!" + "\n"}
                                    {" • Earn FREE balance on App Downloads, Filing Surveys, Inviting Friends" + "\n"}
                                    {" • Recharge Mobile / DTH, Pay Postpaid Bills, Buy Shopping Vouchers" + "\n"}
                                    {" • Stay updated with Live Cricket Score and match scorecards" + "\n"}
                                    {" • Read daily HOROSCOPE, watch cool VIDEOS, play GAMES & read ENTERTAINMENT NEWS while you earn" + "\n"}
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    marginBottom: 15,
                                    textAlign: "justify"
                                }}>{"Invite friends and earn more.." + "\n"}
                                    {" • Earn money for every friend you get to download the earn talktime app" + "\n"}
                                    {" • Earn UNLIMITED Bonus when your friends earn on ETT" + "\n"}
                                    {" • Invite friends through whatsapp, facebook, wechat or SMS" + "\n"}
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