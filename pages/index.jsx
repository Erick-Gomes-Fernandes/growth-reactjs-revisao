import Title from "../src/components/title/title"
import Button from "../src/components/button/button"
import Input from "../src/components/input/input"

export default function HomePage () {
  const handleLabelClick = () => {
    console.log("HANDLE LABEL CLICK")
  }
  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de Login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form>
        <Input type="email" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button onClick={handleLabelClick}>Botão</Button>
      </form>
      <label>LABEL TESTE</label>
      <button>Button</button>
    </>
  )
}