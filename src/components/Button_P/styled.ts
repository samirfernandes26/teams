import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    padding: ${RFValue(8)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
    border-width: ${RFValue(1.5)}px;
    border-color: ${({ theme}) => theme.colors.greem_500};;
    background-color: transparent
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme}) => theme.colors.white};
`;