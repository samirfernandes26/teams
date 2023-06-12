import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    width: 90%;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme}) => theme.colors.greem_500};
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: bold;
    font-size: ${RFValue(24)}px;
    color: ${({ theme}) => theme.colors.white};
`;