import React from 'react'
import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'
import { useSelector } from 'react-redux'

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {wihtdrawmoney,depositmoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
        {/* <button className="btn btn-primary mx-2" onClick={()=>(dispatch(actionCreators.wihtdrawmoney(100)))}>-</button>Update
        <button className="btn btn-primary mx-2" onClick={()=>(dispatch(actionCreators.depositmoney(100)))}>+</button> */}

        <button className="btn btn-primary mx-2" onClick={()=>(wihtdrawmoney(100))}>-</button>Update
        Balance {balance}
        <button className="btn btn-primary mx-2" onClick={()=>(depositmoney(100))}>+</button>
    </div>
  )
}

export default Shop