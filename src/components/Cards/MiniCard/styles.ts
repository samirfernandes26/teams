import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


export const CardComponent = styled.View`
    width: 90%;
    height:  ${RFValue(54)}px;
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    border-radius: ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme}) => theme.colors.gray_500};
`;

export const SubContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Icone = styled(MaterialIcons)`
    justify-content: center;
    align-items: center;
`;

export const TextCard = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray_100};
    font-size:  ${RFValue(16)}px;
    padding-left: ${RFValue(16)}px;

`;

export const ButtonCard = styled(TouchableOpacity)`

`;





