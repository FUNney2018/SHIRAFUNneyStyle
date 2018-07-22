/**
 * サイドコンテンツ用のコンポーネント
 */

import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';

//ReactNativeを使用したコンポーネントの呼び出し
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';

//NativeBaseを使用したコンポーネントの呼び出し
import {
    Container,
    Button,
    Content,
    ListItem,
    Separator,
    Icon
} from 'native-base';

import { Actions } from 'react-native-router-flux';

//幅と高さを取得する
const {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
} = Dimensions.get('window');

//コンポーネントの内容を定義する ※ ClassComponent
class SideContents extends Component {


    //コンストラクタ
    constructor(props) {
        super(props);

        //ステートの初期化を行う
        this.state = { LoginState: false };
    }

    //このコンポーネントのpropTypesの定義（this.propsで受け取れる情報に関するもの）
    static propTypes = {
        closeDrawer: PropTypes.func.isRequired,
        OpenPage: PropTypes.func.isRequired,
    };


    LoginState = () => {
        if (this.state.LoginState) {
            return (
                <ListItem onPress={() => { this.setState({ LoginState: false }), this.props.closeDrawer("Login") }}>
                    <Icon ios='ios-book' android="ios-book" style={{ color: '#000' }} />
                    <Text style={styles.menuTextStyle}>Login</Text>
                </ListItem>);
        } else {
            return (
                <ListItem onPress={() => { this.setState({ LoginState: true }), this.props.closeDrawer("Login")}}>
                    <Icon ios='ios-book' android="ios-book" style={{ color: '#000' }} />
                    <Text style={styles.menuTextStyle}>Logout</Text>
                </ListItem>
            );
        }
    };


    //コンポーネントの内容をレンダリングする
    /**
     * Memo: アイコン選定の参考はこちら
     * https://github.com/oblador/react-native-vector-icons
     * https://oblador.github.io/react-native-vector-icons/
     */
    render() {
        return (
            <Container >
                <View style={styles.containerHeaderStyle}>

                    <View style={styles.overlayStyle}>
                        <Text style={styles.overlayTextStyle}>FUNney</Text>
                    </View>
                </View>
                <Content>
                    {/* ドロワーメニューでのメニュー部分（コンポーネント表示切り替え） */}
                    <Separator bordered>
                        <Text>contents</Text>
                    </Separator>
                    <ListItem onPress={() => { this.props.closeDrawer("Home") }}>
                        <Icon ios='ios-home' android="md-home" style={{ color: '#000' }} />
                        <Text style={styles.menuTextStyle}>Home</Text>
                    </ListItem>

                    <ListItem onPress={() => { this.props.closeDrawer("Send") }} >
                        <Icon ios='ios-cart' android="md-cart" style={{ color: '#ff3333' }} />
                        <Text style={styles.menuTextStyle}>Send</Text>
                    </ListItem>

                    <ListItem onPress={() => { this.props.closeDrawer("Receive") }} last>
                        <Icon ios='ios-cart' android="md-cart" style={{ color: '#ff3333' }} />
                        <Text style={styles.menuTextStyle}>Receive</Text>
                    </ListItem>

                    {this.LoginState()}


{/*                    <ListItem onPress={() => { this.props.closeDrawer("Login"); }}>
                        <Icon ios='ios-book' android="ios-book" style={{ color: '#000' }} />
                        <Text style={styles.menuTextStyle}>Login</Text>
                    </ListItem>
                    <ListItem onPress={() => { this.props.closeDrawer("Signup"); }}>
                        <Icon ios='ios-book' android="ios-book" style={{ color: '#000' }} />
                        <Text style={styles.menuTextStyle}>Signup</Text>
                    </ListItem>
        */}
                </Content>
            </Container>
        );
    }
}


class AccountState extends Component {


    //コンストラクタ
    constructor(props) {
        super(props);

        //ステートの初期化を行う
        this.state = { LoginState: false };
    }


    LoginsState = () => {
        if (LoginState == true) {
          return (
                <ListItem onPress={() => { this.props.closeDrawer("Login"); }}>
                    <Icon ios='ios-book' android="ios-book" style={{ color: '#000' }} />
                    <Text style={styles.menuTextStyle}>Login</Text>
                </ListItem>);
        } else {
            return (
                <ListItem onPress={() => { this.props.closeDrawer("Signup"); }}>
                    <Icon ios='ios-book' android="ios-book" style={{ color: '#000' }} />
                    <Text style={styles.menuTextStyle}>Signup</Text>
                </ListItem>
            );
        }
    };

    render() {




    }

}






//このコンポーネントのスタイル設定
const styles = {
    containerHeaderStyle: {
        height: 63.5,
        backgroundColor: '#F5FCFF',
        position: 'relative',
    },
    containerHeaderImageStyle: {
        height: 160,
        width: DEVICE_WIDTH - 80,
    },
    overlayStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 24,
        paddingBottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    overlayTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerBackgroundStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menuTextStyle: {
        paddingLeft: 8,
        marginRight: 20,
        width: DEVICE_WIDTH - 80,
    }
};

//インポート可能にする宣言
export default SideContents;
