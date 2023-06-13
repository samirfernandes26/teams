import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: ${RFValue(16)}px;
    padding-right: ${RFValue(16)}px;
    padding-top: ${RFValue(8)}px;;
`;

export const TextBold = styled.Text`
    font-family: ${({ theme}) => theme.fonts.bold};
    color: ${({ theme}) => theme.colors.white};
    font-size: ${RFValue(28)}px;
    font-weight: 900;


`;

export const Textregular = styled.Text`
    font-family: ${({ theme}) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.gray_300};
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(4)}px;
  
`;
