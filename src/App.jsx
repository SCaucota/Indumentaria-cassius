import NavBar from "./components/layout/navbar/NavBar";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";

function App() {

  let persona = {nombre: "María Sofía", apellido: "Caucota"}

  return (
    <>
      <NavBar />
      <ItemListContainer persona={persona}/>
    </>
  )
}

export default App
