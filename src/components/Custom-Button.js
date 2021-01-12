import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const { title, onClick, disabled, width, height, onLongClick, style } = props;
  return (
    <Pressable
      disabled={disabled}
      onLongPress={onLongClick}
      style={[
        styles.buttonStyles,
        width && { width: width },
        height && { height: height },
        style && { ...style },
      ]}
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
};
CustomButton.defaultProps = {
  color: 'white',
  onLongClick: () => {},
  disabled: false,
  width: '100%',
  height: '100%',
  style: {},
};
