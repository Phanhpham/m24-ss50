import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    let products=[
        {
            id:1,
            name:"men men1",
            price:5000,
            image:"https://i.pinimg.com/originals/f4/84/d4/f484d4f6cc3544035e42a709a402dd08.jpg"
        },
        {
            id:2,
            name:"men men2",
            price:6000,
            image:"https://upload.wikimedia.org/wikipedia/vi/2/2c/Nobita.png"
        },
        {
            id:3,
        name:"men men3",
        price:7000,
        image:"https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
        },
        
    ]
    const navigate=useNavigate();
    const handleClickDetail = (id:number) => {
        navigate(`/productdetail/${id}`)
    }
  return (
    <div>Products
        {products.map((item)=>{
            return(
                <div>
                    <p>ten{item.name}</p>
                    <p>anh
                        <img src={item.image} alt=""></img>
                    </p>
                    <p>gia {item.price}</p>
                    <button>mua</button>
                    <button onClick ={()=> handleClickDetail(item.id)}>chi tiet spham</button>
                </div>
            )
        })}
    </div>
  )
}
