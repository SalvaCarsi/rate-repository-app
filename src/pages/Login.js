import { Formik, useField } from 'formik'
import { Button, View, StyleSheet } from 'react-native'

import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
  email: '',
  password: '',
}

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, , helpers] = useField(name)

  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  )
}

const validate = (values) => {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validate={validate}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        )
      }}
    </Formik>
  )
}

export default Login
