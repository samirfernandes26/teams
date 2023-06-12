import { Feather } from '@expo/vector-icons';
import { FlatList, Image } from 'react-native';
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
    margin-top: ${RFValue(16)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const Logo = styled(Image)`
    width: ${RFValue(50)}px;
    height: ${RFValue(61)}px;
    margin-top: ${RFValue(24)}px;
`;