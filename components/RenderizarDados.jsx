import { Text } from "react-native";

export default function RenderizarDados({ nome, curso, disciplina, descricao }) {
  return (
    <>
      <Text>Nome: {nome}</Text>
      <Text>Curso: {curso}</Text>
      <Text>Disciplina: {disciplina}</Text>
      <Text>Descrição: {descricao}</Text>
    </>
  );
}

