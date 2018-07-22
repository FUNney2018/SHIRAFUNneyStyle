import { YellowBox } from 'react-native';

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Login } from './src/Pages/Login';
import { Signup } from './src/Pages/Signup';
//import pageC from './pages/pageC';
//import pageD from './pages/pageD';


import { Scene, Router, Actions, Modal } from 'react-native-router-flux';



export class LoginRouter extends Component {
    render() {
        return (
            <Router hideNavBar="true">
                {/* <Modal>
                    Modal直下最初のsceneのみ通常表示 */}
                    <Scene key='main'>

                        <Scene
                            initial={true}
                            key='Login'
                            component={Login}
                            tabBarLabel='ログイン'
                        // icon={() => (<Text>ログイン</Text>)}   // 本当はreact-native-vector-iconsなどをつかってアイコンを渡す...
                        />
                    

                    <Scene
                        //initial={true}
                        key='Signup'
                        component={Signup}
                        tabBarLabel='サインアップ'
                    // icon={() => (<Text>ログイン</Text>)}   // 本当はreact-native-vector-iconsなどをつかってアイコンを渡す...
                    /></Scene>
               {/* </Modal> */}
            </Router>
        );
    }
}

        //export default RouterComponent;


        /*
        
        <Scene key="root" hideNavBar={true}>
                    <Scene key="L" initial component={LLogin} title="Login" />
                    <Scene key="S" component={Signup} title="Signup" />
                    {/*} <Scene key="pageC" component={pageC} title="送金要求画面" />
            <Scene key="pageD" component={pageD} title="履歴画面" />
        </Scene >

*/