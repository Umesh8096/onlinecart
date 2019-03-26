import React from 'react'
import {connect} from 'react-redux'


export const cartItemsWithQuntity =(cartItems) =>    {
    return cartItems.reduc((acc, item)=>{
    const filteredItem =acc.filter(item2=>item2.id===item.id)[0]
    filteredItem !== undefined
    ?filteredItem .quantity++
    :acc.push({...item,qunatity:1,})
    },[])
}

cartItems =[
    {
        id:1,
    },
    {
        id:1, 
    },
    {
        id:2,
    }
]

acc=[]
{
    id:1
}
