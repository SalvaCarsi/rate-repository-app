import { Formik } from 'formik'
import { Button, View, TextInput } from 'react-native'

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
            <TextInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
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
