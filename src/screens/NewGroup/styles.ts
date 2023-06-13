import { Ionicons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: ${({ theme}) => theme.colors.gray_600};
    padding-bottom: ${RFValue(24)}px;
    flex-shrink: 1; 
`;

export const SubContainer = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${({ theme}) => theme.colors.gray_600};
    margin-top: ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const NewGroupContainer = styled.View`
    width: 100%;
    height: 60%;
    
    justify-content: center;
    align-items: center;

`;

export const Icon = styled(Ionicons)`

`;