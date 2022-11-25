import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './view/Home'
import Login from './view/Login'
import { Provider } from './Context'

const App = () => {
    const [dt, setDt] = useState({})
    return <Provider value={{dt,setDt}}>
<Routes>
    <Route path='/' element = {<Home />}/>
    <Route path='/login' element = {<Login />}/>
</Routes>
</Provider>
}

export default App