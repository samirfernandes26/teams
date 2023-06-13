import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: ${({ theme}) => theme.colors.gray_600};
    padding-bottom: ${RFValue(24)}px;
    flex-grow: 1; 
`;

export const SubContainer = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${({ theme}) => theme.colors.gray_600};
    margin-top: ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const ScrollHorizontalContainer = styled.View`
    width: 90%;
    padding: ${RFValue(8)}px 0px;
    mar-bottom: ${RFValue(24)}px;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
`;

export const ViewContador = styled.View`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
    justify-content: center;
    align-items: center;
`;

export const TextContador = styled.Text`
    font-family: ${({ theme}) => theme.fonts.bold};
    font-weight: 900;
    font-size: ${RFValue(16)}px;
    color: ${({ theme}) => theme.colors.gray_200};
`;