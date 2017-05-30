
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../Actions';
import { Button, Card, CardSection } from './Common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        // default to monday on button press if there is no shift present
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        console.log(this.props.employee);

        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        {/*{ (this.props.employee) ? 'Update' : 'Create' }*/}
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};


export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);
