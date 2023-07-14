import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBarContainer from "./components/layout/navbar/NavBarContainer"
import CartContainer from "./components/pages/Cart/CartContainer"
import ItemListContainer from "./components/pages/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarContainer/>}>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>

          <Route path="*" element={<h1>Error 404 - Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
