import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native/types_generated/index';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [disciplina, setDisciplina] = useState("")
  const [descricao, setDescricao] = useState("")
  const [mostrarDados, setMostrarDados] = useState(false)


return (
  <SafeAreaView>

    <View style={styles.container}>
      <Image 
        source={require("./assets/forms.png")}
        style={styles.image}
      />
      <TextInput
        placeholder ="Digite seu nome"
        style={styles.input}
        maxLength ={10}
        autoCapatalize = "words"
        onChangeText={setNome}
      />
      <TextInput
        placeholder

      
      
      />

      <TextInput
        placeholder
      
      />

      <TextInput
        placeholder
      
      />
        

      
   
    <Button
      title="Envio dos dados"
      onPress={()=>setMostrarDados(!mostrarDados)}
    />
    
  
    

    
      
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:200,
    gap:10
  },
  image:{
    resizeMode:"center"
  },
  input:{
    backgroundColor:"#ccc",
    width:300,
    borderRadius:10
  }
});
