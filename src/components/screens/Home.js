import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Share, Dimensions } from 'react-native';
import GlobalFont from 'react-native-global-font'
import { ScrollView } from 'react-native-gesture-handler';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { withNavigation } from 'react-navigation';


class Home extends React.Component {
    constructor(props) {
        super(props)

        let fontName = 'HKNova-Medium'
        GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 

        this.state = {
            shareText: "welcome to out app...we make you proud to use our application......."
        }
    }

    

    ShareMessage = () => {
        Share.share({
            message: this.state.shareText.toString(),
        })
            .then(result => console.log(result))
            .catch(errorMsg => console.log(errorMsg));
    };



    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="#3A48E3" />



                <View style={{
                    backgroundColor: "#F1F7F7",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10, paddingRight: 5,
                    paddingTop: 40, paddingBottom: 15,
                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image
                            source={require('../images/icons8-menu-384.png')}
                            style={{ width: 28, height: 28, tintColor: "#3A48E3", }}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>Make Money </Text><Text style={{ fontSize: 18, color: "#3A48E3" }}>From App</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.ShareMessage}>
                            <Image
                                source={require('../images/icons8-share-384.png')}
                                style={{ width: 27, height: 27, marginRight: 10, tintColor: "#3A48E3" }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.showMenu}>
                            <Menu animationDuration={100}
                                ref={this.setMenuRef}
                                button={<Image
                                    source={require('../images/icons8-menu-vertical-96.png')}
                                    style={{ width: 28, height: 28, tintColor: "#3A48E3" }}
                                />}
                            >
                                <MenuItem onPress={() => this.props.navigation.navigate("AboutUs", this.hideMenu())}>About Us</MenuItem>
                            </Menu>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{ flex: 1, backgroundColor: '#F1F7F7' }}>
                    <ScrollView style={{ marginBottom: 0 }} showsVerticalScrollIndicator={false}>
                        <View style={[styles.cardView, { backgroundColor: "#405176", marginTop: 10 }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen1")}>
                                <Image
                                    source={require('../images/loco.jpeg')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Play Loco</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#4483f3" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen2")}>
                                <Image
                                    source={require('../images/google_reward.jpg')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Google Opinion Rewards</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#c4dca7" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen3")}>
                                <Image
                                    source={require('../images/roposo.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Roposo</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#e5e5e7" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen4")}>
                                <Image
                                    source={require('../images/mcent.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>mCent Browser</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#f78d1f" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen5")}>
                                <Image
                                    source={require('../images/rozdhan.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Roz Dhan</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#04a3e3" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen6")}>
                                <Image
                                    source={require('../images/pocket-money.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Pocket Money</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "white" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen7")}>
                                <Image
                                    source={require('../images/work-from-home.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Work From Home Jobs</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#fc4b57" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen8")}>
                                <Image
                                    source={require('../images/Poll_Pay.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Poll Pay</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#fbc404" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen9")}>
                                <Image
                                    source={require('../images/makemoney.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Free Cash App</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#4bb556" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen10")}>
                                <Image
                                    source={require('../images/play-quize.jpg')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Play Quiz</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#fee3ac" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen11")}>
                                <Image
                                    source={require('../images/mathcash.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Math Cash</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#ffa800" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen12")}>
                                <Image
                                    source={require('../images/sudoku.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Sudoku</Text>
                            </View>
                        </View>
                        <View style={[styles.cardView, { backgroundColor: "#ff9a3d" }]}>
                            <TouchableOpacity style={styles.cardTouchEvent} onPress={() => navigate("Screen13")}>
                                <Image
                                    source={require('../images/earntalktime.png')}
                                    resizeMode={'cover'}
                                    style={{
                                        width: "100%",
                                        height: 180,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }} />
                            </TouchableOpacity>
                            <View style={styles.transperantView}>
                                <Text style={{ fontSize: 15 }}>Earn Talktime</Text>
                            </View>
                        </View>
                    </ScrollView>

                    

                </View>
            </View>
        );
    }
}

export default withNavigation(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardView: {
        width: "90%",
        height: 180,
        alignSelf: "center",
        marginVertical: 5,
        borderRadius: 20,
        elevation: 10,
    },
    cardTouchEvent: {
        height: 130,
        overflow: "hidden"
    },
    transperantView: {
        height: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        padding: 12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});