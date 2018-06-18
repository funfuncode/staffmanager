import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {

  const { containerStyle, textStyle, cardSectionStyle } = style;

  return (
    <Modal
      animationType="slide"
      transparent
      visible={props.modalVisible}
      onRequestClose={() => {}} >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>{props.children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={props.onPressYes}>Yes</Button>
            <Button onPress={props.onPressNo}>No</Button>
          </CardSection>
        </View>
      </Modal>
    );
  };

  const style = {
    cardSectionStyle: {
      justifyContent: 'center'
    },
    textStyle: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 40
    },
    containerStyle: {
      backgroundColor: 'rgba(0,0,0,0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
    }
  };

  export { Confirm };
