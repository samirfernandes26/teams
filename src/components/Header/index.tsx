import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import {Container, IconeHeader, Logo} from './styles';

import logo from '@assets/logo.png'

export function Header(){

    return (
        <Container>
            <IconeHeader 
                name='chevron-left'
                size={RFValue(20)} 	
                color="#FFFFFF"
                
            />
            <Logo source={logo}/>
        </Container>
    )
}