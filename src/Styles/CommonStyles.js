import { StyleSheet } from 'react-native';
import { Center } from '../components';

export const commonStyles = StyleSheet.create({
    centerFlex: ({direction, height, width, containerColor}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    direction,
    height,
    width,
    backgroundColor: containerColor ?  containerColor : '#fff',
    }),
}) 