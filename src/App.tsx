
import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import Home from './assets/Components/home/Home'
// import Header from './assets/Components/header/Header'
// import Register from './assets/Components/register/Register'
// import Login from './assets/Components/login/Login'
// import Products from './assets/Components/products/Products'
// import ProductDetail from './assets/Components/ProductDetail/ProductDetail'
import ProductDetail1 from './assets/Components/B1/ProductDetail1'
import Student from './assets/Components/B2/Student'
import Employee from './assets/Components/B3+b4/Employee'
import PrivateRouter from './assets/Components/B5.+b6/PrivateRouter'
import Login1 from './assets/Components/B5.+b6/Login1'
import Account from './assets/Components/B5.+b6/Account'

export default function App() {
  return (
    <div>App
        
      <Routes>
          {/* <Route path ="/home" element ={<Home></Home>}>
          <Route path ="/home/header" element ={<Header></Header>}></Route>
          </Route>
      <Route path="/register" element ={<Register></Register>}></Route>
      
      <Route path="/login" element ={<Login></Login>}></Route>
      <Route path="/products" element ={<Products></Products>}></Route>
      <Route path="/ProductDetail/:productId" element ={<ProductDetail></ProductDetail>}></Route> */}
      <Route path="/product/:id" element ={<ProductDetail1></ProductDetail1>}></Route>
      <Route path="/student/:name" element ={<Student></Student>}></Route>
      <Route path="/student" element ={<Employee></Employee>}></Route>
      <Route path='/login1' element={<Login1 />}>
            <Route index element={<Account />} />
            <Route path='/' element={<PrivateRouter />} />
        </Route>
      </Routes>
      
    </div>
  )
}






