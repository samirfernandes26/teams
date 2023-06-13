import React from 'react';
import { Container, IconeHeader, PaperImput } from "./styles";
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps} from 'react-native-paper';

interface IProps extends TextInputProps{
}

export function Input({...rest}) {
    const theme = useTheme();
    
    return (
        <PaperImput
            {...rest}
            placeholderTextColor={theme.colors.gray_300}
            style = {{
                backgroundColor: theme.colors.gray_500,
                height:RFValue(52),
                color:theme.colors.gray_100,
                justifyContent: 'center',
                width:'90%',
                margin:RFValue(16),               
            }}
            outlineColor={theme.colors.gray_600}
            activeOutlineColor={theme.colors.greem_700}
            mode = 'outlined'
            // right ={
            //     <PaperImput.Icon 
            //         icon='plus'
            //         size={RFValue(24)}
            //         color={theme.colors.greem_700}
            //         style={{backgroundColor: theme.colors.greem_500}}
                    
                    
            //     />
            // }
        />
    );
}
