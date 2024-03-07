import { Formik } from 'formik'
import { Button, View } from 'react-native'

import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <StyledTextInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <StyledTextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        )
      }}
    </Formik>
  )
}

export default Login
