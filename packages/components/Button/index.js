import PropTypes from 'prop-types'
import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native';

const noop = () => {}

const Button = ({
    onPress = noop,
    buttonStyles,
    textStyles,
    content
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={buttonStyles}>
            <Text style={textStyles}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  Button.defaultProps = {
    onPress: noop
  }
  
  Button.propTypes = {
    onPress: PropTypes.func,
    buttonStyles: PropTypes.any,
    textStyles: PropTypes.any,
    content: PropTypes.string
  }
  
  export default Button
  