import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


export const CardComponent = styled.TouchableOpacity`
    padding: ${RFValue(8)}px;
    width: 90%;
    height:  ${RFValue(90)}px;
    padding: ${RFValue(16)}px;
    border-radius: ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme}) => theme.colors.gray_500};;
`;

export const Icone = styled(Ionicons)`
    justify-content: center;
    align-items: center;
`;

export const TextCard = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray_100};
    font-size:  ${RFValue(16)}px;
    padding-left: ${RFValue(16)}px;

`;





