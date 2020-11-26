import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Screen11 extends React.Component {

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
                    <Text style={{ fontSize: 20 }}>Math Cash </Text>
                    <View style={{ flexDirection: 'row' }}>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}>
                        <View style={{ width: "95%", alignSelf: "center" }}>
                            <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
                                <Text style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                    alignSelf: "center",
                                    fontWeight: "bold"
                                }}>Math Cash - Solve and Earn Rewards

</Text>
                            </View>

                            <Image
                                source={require('../images/mathcash.png')}
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
                                }}>{"Do you want to earn money while solving Math?"}</Text>
                                <Text style={{
                                    fontSize: 15,
                                    marginBottom: 15,
                                    textAlign: "justify"
                                }}>{"Here are the main features you can enjoy with Math Cash:" + "\n" + "\n"}
                                    {" • Math Cash Duel. Solve 20 sets of arithmetic expressions in a minute. Beat your opponent by solving as many expressions and as fast as you can. No need to perfect all the items. As long as you are the highest and the fastest solver, you are the winner." + "\n"}
                                    {" • Guess and Win. Earn points by guessing the secret number." + "\n"}
                                    {" •  Surveys and Tasks. Extra features where you can earn by doing sponsors' tasks." + "\n"}
                                    {' • Invite friends. When your friend earns points by solving Math and completing tasks, you can also earn commissions.' + "\n"}
                                    {" • Once you reach the minimum required points, you can convert them to Paypal cash." + "\n"}
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