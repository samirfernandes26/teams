import React from "react";
import { Container, TextButton } from "./styled";
import { TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
    colorButton?: string;
    nomeButton?: string;
    isActive: boolean;
}

export function Button_P({colorButton, isActive, nomeButton='Criar nova Turma', ...rest}:IProps) {
    return( 
        <Container isActive={isActive} {...rest} >
            <TextButton>
                {nomeButton}
            </TextButton>
        </Container>
    )
}