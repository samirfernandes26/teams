import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TextButton } from "./styles";

interface IProps extends TouchableOpacityProps  {
    colorButton?: string;
}

export function Button_G({colorButton, ...rest}:IProps) {
    return( 
        <Container colorButton={colorButton} {...rest}>
            <TextButton>
                criar nova turma
            </TextButton>
        </Container>
    )
}