import React, {useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './view/Home'
import Login from './view/Login'
import Users from './view/Users'
import {Provider} from './Context'
import {useBeforeUnload} from 'react-use'
//import 
const App = () => {
    const [dt, setDt] = useState({})
    useEffect(()=>{
        console.log("Start")
    },[])
    useBeforeUnload(()=>{
        console.log("BeforeUnload")
    })
    return <Provider value={{dt,setDt}}>
<Routes>
    <Route path='/' element = {<Home />}/>
    <Route path='/login' element = {<Login />}/>
    <Route path='/users' element = {<Users />}/>
</Routes>
</Provider>
}
export default App