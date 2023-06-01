import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: ${RFValue(16)}px;
    padding-right: ${RFValue(16)}px;
`;

export const Logo = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(55)}px;
`;

export const IconeHeader = styled(Feather)`
    justify-content: center;
    align-items: center;
`;