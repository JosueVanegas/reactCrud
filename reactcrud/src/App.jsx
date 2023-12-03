import  useState  from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import UsersPage from './components/UsersPage'
import ProductsPage from './components/ProductsPage'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='' element={<HomePage></HomePage>}></Route>
        <Route path='/users' element={<UsersPage></UsersPage>}></Route>
        <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
      </Routes>
    </>
  )
}

export default App
