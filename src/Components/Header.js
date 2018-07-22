import React, { Component } from 'react';
import {
    //PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import PropTypes from 'prop-types';
import { DrawerMenu } from './Drawer_Menu'
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';
import { Button, Content, Container } from 'native-base';

export const Head = ({ onPress }) => {

    return (


        <Header backgroundColor="#F3A033"
            leftComponent={
                <Icon
                    name='bars'
                    type='font-awesome'
                    color='#fff'
                    onPress={onPress}
                />}
            centerComponent={{ text: 'FUNney', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />


    );

}
