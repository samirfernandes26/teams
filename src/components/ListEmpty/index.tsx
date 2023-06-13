import React from 'react';
import { Container, Textregular } from './styles';

interface IProps {
    mensagem: string;
}


export function ListEmpty({mensagem}:IProps){

    return (
        <Container>
           <Textregular>
                {mensagem}
           </Textregular>
        </Container>
    )
}