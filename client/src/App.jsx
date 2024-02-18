import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/home/Home';
import SignUp from './pages/auth/SignUp';
import SingIn from './pages/auth/SingIn';

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
