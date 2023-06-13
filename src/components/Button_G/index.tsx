import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TextButton } from "./styles";

interface IProps extends TouchableOpacityProps  {
    colorButton?: string;
    nomeButton?: string;
}

export function Button_G({colorButton, nomeButton='Criar nova Turma', ...rest}:IProps) {
    return( 
        <Container colorButton={colorButton} {...rest}>
            <TextButton>
                {nomeButton}
            </TextButton>
        </Container>
    )
}