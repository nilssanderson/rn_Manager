
import React, { Component } from 'react';
import { Button, Card, CardSection, Field } from './Common';


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Field
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>

                <CardSection>
                    <Field
                        label="Phone"
                        placeholder="012345-678910"
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default EmployeeCreate;
