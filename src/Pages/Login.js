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
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';


const {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
} = Dimensions.get('window');

export class Login extends Component {


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

                    <Text style={styles.Login}> Login </Text>


                    {/*<Text style={styles.Text}> ID </Text>*/}
                    <TextInput
                        style={styles.ID}
                        onChangeText={(ID) => this.setState({ ID })}
                        value={this.state.text}
                        placeholder="ID"
                        textContentType="username"
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


                    <Button block info style={styles.Button} onPress={() => this.closeModal()}>
                        <Text style={styles.ButtonText}  >register</Text>
                    </Button>

                    <Text > You don't have an account?  </Text>{/*You don't have an account? sign up now!!  */}
                    <Text onPress={() => this.props.OpenPage('Signup')} style={styles.SignupText}> create account now!! </Text>

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
        marginTop: 50,
        height: 150,
        width: 150,
    },
    Login: {
        fontSize: 30,
        fontFamily: 'Cochin',
        textAlign: 'center',
        marginTop: 50,
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
        marginTop: 20,
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
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center',
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',

    },
    SignupText:{
        color: 'blue'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
