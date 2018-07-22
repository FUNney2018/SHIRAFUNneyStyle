import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, Content, Container } from 'native-base';
import { Icon } from 'react-native-elements'
import { Send } from '../Pages/Sending';
import { Receive } from '../Pages/Receive';

const {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
} = Dimensions.get('window');

export class Home extends Component {

    //コンストラクタ
    constructor(props) {
        super(props);

        //ステートの初期化を行う
        this.state = { LoginState: false };
    }

    //このコンポーネントのpropTypesの定義（this.propsで受け取れる情報に関するもの）
    static propTypes = {
        OpenPage: PropTypes.func.isRequired,
    };


    render() {
        return (

            <Container >


                <Container style={styles.HeaderStyle}>
                    <Text style={styles.HeaderText}>100.000.000FUN</Text>
                </Container>

                <Container style={styles.container}>

                    <Button block info style={styles.Button} onPress={() => { this.props.OpenPage("Send")}}>
                    <Text style={styles.ButtonText}  >送金 </Text>
                </Button>

                    <Button block info style={styles.Button} onPress={() => {this.props.OpenPage("Send")}}>
                    <Text style={styles.ButtonText}  >受金</Text>
                </Button>
                

                </Container>
            </Container>

        );
    }

}


//このコンポーネントのスタイル設定
const styles = {
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        width: DEVICE_WIDTH,
    },
    HeaderStyle: {
        height: 30,

       // position: 'relative',
        
    },
    HeaderText: {
        fontSize: 20,
        textAlign: 'right',
        color:'#000'

    },
    Button: {
        height: 50,
        width: DEVICE_WIDTH - 150,
        marginTop: 50,
        alignSelf: 'center',
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',

    },
};