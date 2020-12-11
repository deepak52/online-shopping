import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'

const initState = {
    // items: [
    //     {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
    //     {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
    //     {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
    //     {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
    //     {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
    //     {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    // ],
    items: [],
    addedItems:[],
    total: 0

}
const cartReducer = (state = initState,action)=>{

    if(action.type === '@product/saga/list_products') {
        return {
            ...state,
            items: action.payload.data
        }
    }
    if(action.type === '@product/saga/place_order') {
        return {
            ...state,
            items: action.payload.data
        }
    }
    if(action.type === '@product/saga/list_all_order') {
        return {
            ...state,
            items: action.payload.data
        }
    }
    if(action.type === '@cart/saga/add_to_cart'){
        debugger
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === '@cart/saga/getCartItem_failed') {
        return [];
    }

    if(action.type === '@cart/saga/remove_from_cart'){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === '@cart/saga/add_new_quanttity_cart'){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type === '@cart/saga/subtract_from_cart'){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === '@cart/saga/remove_shipping_cart'){
        alert("remove inside reducer")
        return{
            ...state,
            total: state.total - 6
        }
  }

    if(action.type === '@cart/saga/add_shipping_cart'){
        alert("add inside reducer")
          return{
              ...state,
              total: state.total + 6
          }
    }
    if (action.type === '@cart/saga/empty_cart') {
        const newItems = [];
        return {
        ...state,
        addedItems: newItems,
        total : 0,
        
        }
        }

    
  else{
    return state
    }
    
}

export default cartReducer
