import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import * as Yup from 'yup'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Formik } from 'formik'

const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(4,'Password must be at least 4 characters long')
  .max(16,'Password must be at most 16 characters long')
  .required('"Password" is a required field')
})

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassgenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);

  const passwordGenerated = (passwordLength : number) => {
    let characterList = '';
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitchar = '0123456789';
    const specialChar = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if(lowerCase) {
      characterList += lowerCaseChar;
    }
    if(upperCase) {
      characterList += uppercaseChar;
    }
    if(number){
      characterList += digitchar;
    }
    if(symbol){
      characterList += specialChar;
    }
    const Resultpassword = createPassword(characterList, passwordLength);
    setPassword(Resultpassword)
    setIsPassGenerated(true);
  }
  const createPassword = (characters : string , passwordLength : number) => {
    let result = '';
    for(let i = 0; i < passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex);
    }
    return result;
    console.log("Soham");
    
  }
  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumber(false)
    setSymbol(false)
  }
  return (
    <ScrollView> 
      <SafeAreaView>
        <View style={styles.formContainer}>
          <Text style={styles.title}>PassWord GeneraTor</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    // margin: 8,
    padding: 8,
    backgroundColor: '#ECEAE8',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});