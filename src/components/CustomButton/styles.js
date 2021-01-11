import { StyleSheet } from 'react-native';

export const btnStyles = StyleSheet.create({
    basicStyles: (params) => ({
      height: params.height,
      width:  params.width,
      color: params.fgColor,
      backgroundColor: params.bgColor,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    rounded: (params) => ({
      borderRadius: params.width/2,
    }),
    curvedCorners: (params) => ({
        borderRadius: params.radiusMeasure,
    })
})