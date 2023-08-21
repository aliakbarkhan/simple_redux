export const depositmoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload: amount
        })

    }

}

export const wihtdrawmoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
    }   
}