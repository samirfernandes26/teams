import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, TextBold, Textregular } from './styles';

import logo from '@assets/logo.png'

export function Title(){

    return (
        <Container>
           <TextBold>
                Nova Turma
           </TextBold>
           <Textregular>
                cire uma turma para adicionar pessoas!
           </Textregular>
        </Container>
    )
}