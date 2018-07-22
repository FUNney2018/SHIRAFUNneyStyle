import React, { Component } from 'react';
import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    WebView,
} from 'react-native';
import {
    Button,
    Drawer,
    Container
} from 'native-base';
//import Drawer from 'react-native-drawer'
import { Head, LeftComponent } from './Header';
import { App } from '../../App';

//ドロワー用コンポーネントの宣言
import SideContents from './SideContents';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { Actions } from 'react-native-router-flux';
//import RouterComponent from '../../Router'
import { LoginRouter } from '../../Router'
import { Send } from '../Pages/Sending';
import { Receive } from '../Pages/Receive';
import { Home } from '../Pages/Home';

export class DrawerMenu extends Component {


    //コンストラクタ
    constructor(props) {
        super(props);

        //ステートの初期化を行う
        this.state = { drawerOpen: false, drawerDisabled: false, itemSelected: 'Home' };
    }

    DrawerState = () => {
        (this.state.drawerOpen) ? this._drawer._root.close() : this._drawer._root.open()
    };

    OpenPage = (item) => {
        //this.setState({ itemSelected: item })
        this.setState({ itemSelected: item })
        // this._drawer._root.close()
    };

    //ドロワーメニューを閉じる際に関する設定をする
    closeDrawer = (item) => {
        this.setState({ itemSelected: item })
        this._drawer._root.close()
    };

    //ドロワーメニューを開く際に関する設定をする
    openDrawer = () => {
        this._drawer._root.open()
    };

    //ドロワーメニューに対応したシーンの切り替えをする
    _onItemSelected = (selected) => {
        switch (selected) {
            case "Home":
                return <Home OpenPage={this.OpenPage} />
            case "Login":
                return <Login OpenPage={this.OpenPage} />
            case "Signup":
                return <Signup OpenPage={this.OpenPage} />
            case "Send":
                return <Send />
            case "Receive":
                return <Receive />
            case "Router":
                return <LoginRouter />
            default:
                return <App />
        }
    };

    //ドロワーメニューに対応したタイトルの切り替えをする <-コピペしただけだからorz
    _onTitleSelected = (selected) => {
        switch (selected) {
            case "Home":
                return "Home"
            case "Login":
                return "Login"
            case "Signup":
                return "Signup"
            case "Router":
                return "Router"
            case "Send":
                return "Send"
            case "Receive":
                return "Receive"
            default:
                return "紹介お店一覧"
        }
    };


    //コンポーネントの内容をレンダリングする
    render() {
        return (
            <Drawer
                //open={false}
                ref={(ref) => this._drawer = ref}
                //type={"overlay"}
                type={(Platform.OS === 'ios') ? "static" : "overlay"}
                content={
                    /*<App />*/
                    <SideContents OpenPage={this.OpenPage} closeDrawer={this.closeDrawer} />
                }
                onOpen={() => {
                    this.setState({ drawerOpen: true })
                    console.log("drawerOpen");
                }}
                onClose={() => {
                    this.setState({ drawerOpen: false })
                    console.log("drawerClose");
                }}
                tweenHandler={(ratio) => {
                    return {
                        mainOverlay: { opacity: ratio / 2, backgroundColor: 'black' }
                    }
                }}
                captureGestures={true}
                tweenDuration={200}
                disabled={this.state.drawerDisabled}

                openDrawerOffset={(viewport) => {
                    return 150
                }}
                side={"left"}
                closedDrawerOffset={() => 0}
                panOpenMask={0.04}
                negotiatePan={true}
                tapToClose={true}

            >


                <Container style={styles.container}>

                    {this._onItemSelected(this.state.itemSelected)}


                </Container>


            </Drawer>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    HeaderStyle: {
        height: 50,
        //backgroundColor: '#F3A033',
        // position: 'relative',

    },
    HeaderText: {
        fontSize: 26,
        textAlign: 'right',
        color: '#000'

    },
});
