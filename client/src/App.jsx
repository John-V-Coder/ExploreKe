import { Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';


function App() {


  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <h1>Header componenets</h1>

     <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
     </Routes>
    </div>
  )
}

export default App;
