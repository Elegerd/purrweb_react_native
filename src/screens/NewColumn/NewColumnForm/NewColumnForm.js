import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {View, StyleSheet} from 'react-native';
import CustomField from '../../../components/CustomField/CustomField';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {maxLength, minLength, required} from '../../../utils/validations';

const titleValidate = [minLength(2), maxLength(32), required];

const NewColumnForm = ({handleSubmit}) => {
  return (
    <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name="title"
        label="Title"
        keyboardType="default"
        component={CustomField}
        validate={titleValidate}
      />
      <CustomButton label={'Create'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

NewColumnForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({form: 'newColumn'})(NewColumnForm);
