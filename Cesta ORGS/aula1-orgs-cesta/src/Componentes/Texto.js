import React from 'react';
import { Text, StyleSheet } from 'react-native';

//usar children faz com que puxe todos componentes filhos
export default function Texto({ children, style }) {
  //criei variavel para fazer verificação do negrito
  let estilo = estilos.texto;
  //se houver um style, ele verifica se o mesmo é bold
  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
});
