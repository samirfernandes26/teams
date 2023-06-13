import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

interface IProp {
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<IProp>`
    padding: ${RFValue(8)}px;
    height: ${RFValue(35)}px;
    margin-left: ${RFValue(8)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px;
    border-width: ${RFValue(1.5)}px;
    border-color: ${({ theme}) => theme.colors.gray_600};
    background-color: transparent;

    ${({ isActive }, ) => isActive &&  css` 
        border-color: ${({ theme}) => theme.colors.greem_500};
    `}
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme}) => theme.colors.gray_200};
`;