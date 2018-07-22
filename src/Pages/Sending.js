import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions,
    Modal
} from 'react-native';
import { Button, Content, Container } from 'native-base';


const {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
} = Dimensions.get('window');

export class Send extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Money: ""
        };
    }

    render() {
        return (

            /*
            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => this.closeModal()} /> */


            <Container style={styles.container}>

                <Text style={styles.Send}>Send</Text>

                <TextInput
                    style={styles.Money}
                    onChangeText={(Money) => this.setState({ Money })}
                    value={this.state.text}
                    clearButtonMode="always"
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholder="Money"
                />


                <Container>
                    <Button block info style={styles.Button} >
                        <Text style={styles.ButtonText} >register</Text>
                    </Button>
                </Container>


            </Container>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
    },
    Image: {
        marginTop: 50,
        height: 150,
        width: 150,
    },
    Send: {
        fontSize: 30,
        fontFamily: 'Cochin',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    Text: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    Money: {
        height: 40,
        width: DEVICE_WIDTH - 100,
        alignItems: 'center',
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 20,
    },
    Password: {
        height: 40,
        width: DEVICE_WIDTH - 100,

        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 20,

    },
    Button: {
        height: 50,
        width: DEVICE_WIDTH - 150,
        marginTop: 50,
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
