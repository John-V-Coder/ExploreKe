import { Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import AdminLayout from './components/admin-view/layout'
import ShoppingLayout from './components/shopping-view/layout'
import CheckAuth from './components/common/check-auth'


import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import AdminDashboard from './pages/admin-view/dashboard'
import AdminFeatures from './pages/admin-view/features'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import NotFound from './pages/not-found/index'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListing from './pages/shopping-view/listing'





function App() {
   
  const isAuthenticated = false;
  const user = null

  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <h1>Header componenets</h1>

     <Routes>
      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>
      }>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      }>
          <Route path="dashboard" element={<AdminDashboard />}/>
          <Route path="products" element={<AdminProducts />}/>
          <Route path="orders" element={<AdminOrders />}/>
          <Route path="feature" element={<AdminFeatures />}/>
      </Route>
      <Route path="/shop" element={
        <CheckAuth isAuthenticated = {isAuthenticated} user={user}>
          <ShoppingLayout/>
        </CheckAuth>
      }>
           <Route path="checkout" element={<ShoppingCheckout />}/>
           <Route path="account" element={<ShoppingAccount />}/>
           <Route path="home" element={<ShoppingHome />}/>
           <Route path="listing" element={<ShoppingListing />}/>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
     </Routes>
    </div>
  )
}

export default App;
