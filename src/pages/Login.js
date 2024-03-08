import { Formik, useField } from 'formik'
import { Button, View, StyleSheet } from 'react-native'

import StyledText from '../components/StyledText'
import StyledTextInput from '../components/StyledTextInput'
import * as validationSchemas from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: '',
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
    marginLeft: 12,
  },
  form: {
    margin: 12,
  },
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchemas.loginValidationSchema}
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
