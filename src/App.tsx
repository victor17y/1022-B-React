//componente React//
import "./App.css"
function App() {
  let nome = "Victor Hugo"
  let sobrenome = " da costa bueno"
  return (
    <div>
    <h1 className="nome">Nome:{nome}</h1>
    <p className="sobrenome"> {sobrenome} </p>
    </div>
  )
}
export default App
