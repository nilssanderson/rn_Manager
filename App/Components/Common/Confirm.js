
import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import styles from './Styles/ConfirmStyles';


const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyles, textStyles, cardSectionStyles } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}} // empty just to satisfy android
    >
      <View style={containerStyles}>
        <CardSection style={cardSectionStyles}>
          <Text style={textStyles}>
            {children}
          </Text>
        </CardSection>
        
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>

    </Modal>
  );
};


export { Confirm };
