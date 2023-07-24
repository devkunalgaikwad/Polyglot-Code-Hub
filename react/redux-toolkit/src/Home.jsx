import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
    const {c} = useSelector(state=>state.custom)
    const dispatch = useDispatch()
    const addBtn =()=>{
        dispatch({
            type:'increment'
        })
    }
    const subBtn =()=>{
        dispatch({
            type:'decrement'
        })
    }
    const addBtn25=()=>{
        dispatch({
            type:'incrementByValue',
            payload:25,
        })
    }
  return (

    <>
        <h2>{c}</h2>
        <button onClick={addBtn}>Increase</button>
        <button onClick={addBtn25}>Increase by 25</button>
        <button onClick={subBtn}>decrease</button>
    </>
  )
}

export default Home