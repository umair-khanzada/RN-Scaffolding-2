import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { btnStyles } from './styles';

function CustomButton(props) {
  const { title, onClick, disabled, width, height, onLongClick, style, rounded, curvedButton, borderMeasure, bgColor, fgColor } = props;
  return (
    <Pressable
      disabled={disabled}
      onLongPress={onLongClick}
      style={{
        ...btnStyles.basicStyles({height, width, bgColor: 'pink' , fgColor: 'red' }),
        ...(rounded && btnStyles.rounded({width})),
        ...(!rounded && curvedButton && btnStyles.curvedCorners({radiusMeasure: 10})) 
      }}
      onPress={onClick}>
      <Text>{title}</Text>
    </Pressable>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  buttonStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

CustomButton.prototype = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onLongClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  rounded: PropTypes.bool,
  curvedButton: PropTypes.bool,
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  borderMeasure: PropTypes.number || PropTypes.string,
};
CustomButton.defaultProps = {
  color: 'white',
  onLongClick: () => { },
  disabled: false,
  width: '100%',
  height: '100%',
  style: {},
  rounded: false,
  curvedButton: false,
  bgColor: '#fff',
  fgColor: '#fff',
  borderMeasure: 0,
};
