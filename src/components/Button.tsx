type ButtonProps = {
  children?: string; // ?: significa parametro opcional
}

//posso passar qnds propriedades eu quiser pra esse botão
// basta add dentro do type

export function Button(props: ButtonProps) {
  return <button>{props.children || "Clique aqui"}</button>;
}
