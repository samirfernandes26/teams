import React from 'react';
import { Container, TextBold, Textregular } from './styles';

interface IProps {
    titleBold: string;
    titleRegular: string;
}


export function Title({titleBold,titleRegular}:IProps){

    return (
        <Container>
           <TextBold>
                {titleBold}
           </TextBold>
           <Textregular>
                {titleRegular}
           </Textregular>
        </Container>
    )
}