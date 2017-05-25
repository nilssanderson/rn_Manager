
import React, { Component } from 'react';
import { connect } from 'redux';
import { emailChanged } from '../Actions';
import { Button, Card, CardSection, Field } from './Common';


class LoginForm extends Component {

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label={'Email'}
            placeholder={'email@gmail.com'}
            onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>
 
        <CardSection>
          <Field
            secureTextEntry
            label={'Password'}
            placeholder={'********'}
          />
        </CardSection>
 
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}


export default connect(null, { emailChanged })(LoginForm);
