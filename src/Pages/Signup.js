import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions,
    Modal,
    ScrollView
} from 'react-native';
import { Button, Content, Container } from 'native-base';

import { Actions } from 'react-native-router-flux';

const {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
} = Dimensions.get('window');

export class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ID: 'Useless Placeholder',
            password: ""
        };
    }

    state = {
        modalVisible: false,
    };

    openModal() {
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
        this.props.OpenPage('Home')
    }

    render() {
        return (

            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>

                <Container style={styles.container}>


                    <Image source={require('../assets/FUNIcons/t300.png')}
                        style={styles.Image} />

                    <Text style={styles.Signup}> Signup </Text>


                    {/*<Text style={styles.Text}> ID </Text>*/}
                    <TextInput
                        style={styles.ID}
                        onChangeText={(ID) => this.setState({ ID })}
                        value={this.state.text}
                        placeholder="ID"
                        clearButtonMode="always"
                        returnKeyType="done"
                    />


                    {/*<Text style={styles.Text}> password </Text>*/}
                    <TextInput
                        style={styles.Password}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.text}
                        placeholder="Password"
                        textContentType="password"
                        clearButtonMode="always"
                        returnKeyType="done"
                    />

                    <TextInput
                        style={styles.Password}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.text}
                        placeholder="Password"
                        textContentType="password"
                        clearButtonMode="always"
                        returnKeyType="done"
                    />

                    <Button block info style={styles.Button} onPress={() => this.closeModal()}>
                        <Text style={styles.ButtonText} >register</Text>
                    </Button>


                    <Text > Do you have an account?  </Text>
                    <Text onPress={() => this.props.OpenPage('Login')} style={styles.SignupText}> sign up now!!</Text>


                </Container>
            </Modal>

        );
    }

}


//type={(Platform.OS === 'ios') ? "overlay" : "overlay"}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
    },
    Image: {
        marginTop: 40,
        height: 150,
        width: 150,
    },
    Signup: {
        fontSize: 30,
        fontFamily: 'Cochin',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    Text: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    ID: {
        height: 40,
        width: DEVICE_WIDTH - 100,
        alignItems: 'center',
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,
    },
    Password: {
        height: 40,
        width: DEVICE_WIDTH - 100,

        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,

    },
    Button: {
        height: 50,
        width: DEVICE_WIDTH - 150,
        marginTop: 30,
        marginBottom:20,
        alignSelf: 'center',
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',

    },
    SignupText: {
        color: 'blue',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
