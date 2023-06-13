import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: ${RFValue(16)}px;
`;

export const Textregular = styled.Text`
    font-family: ${({ theme}) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.gray_300};
    font-size: ${RFValue(16)}px;  
`;
