import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IProps {
    colorButton?: string;
}

export const Container = styled(TouchableOpacity)<IProps>`
    width: 90%;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme}) => theme.colors.greem_500};

    ${({ colorButton }, ) => colorButton &&  css` 
        background-color: ${colorButton};
    `}
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: bold;
    font-size: ${RFValue(24)}px;
    color: ${({ theme}) => theme.colors.white};
`;