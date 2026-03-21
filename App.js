import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mostrarDados, setMostrarDados] = useState(false);

  useEffect(() => {
    console.log("Formulario Pronto");
  }, []);

  function enviarDados() {
    if (!nome || !curso || !disciplina || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    setMostrarDados(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Formulario</Text>

        <TextInput
          placeholder="Digite seu nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Digite seu curso"
          style={styles.input}
          value={curso}
          onChangeText={setCurso}
        />

        <TextInput
          placeholder="Digite sua disciplina"
          style={styles.input}
          value={disciplina}
          onChangeText={setDisciplina}
        />

        <TextInput
          placeholder="Descrição"
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
        />

        <Button
          title="Enviar dados"
          onPress={enviarDados}
        />

        {mostrarDados && (<RenderizarDados nome={nome} curso={curso} disciplina={disciplina} descricao={descricao} />)}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 10
  }
});
  

  







  
