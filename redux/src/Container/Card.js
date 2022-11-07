import React from 'react'
import {connect} from 'react-redux'
import {addorder,resettablenumber,setfilter,resetfilter} from '../Action'

function Card({filter_name,table_number,addorder,resettablenumber,resetfilter}) {
    const [data,setData] = React.useState([]);
    const [cloneData,setCloneData] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json`).then(
            response => response.json()
        ).then(
            json => {
                setData(json.items);
                setCloneData(json.items)
            }
        )
      },[])

  React.useEffect(() => {
    if(filter_name !== "All Items"){
       let specificData = cloneData.filter((item) => item.category === filter_name);
       setData(specificData)
    }else{
       setData(cloneData)
    }
  },[filter_name])

  const Handler = async(id,name,prize,url) => {
    if(table_number !== null){
      await addorder(id,name,prize,url,table_number);
      await resettablenumber;
      await resetfilter;
      alert("Order placed successfully")
    }else{
      alert("please choose table_number")
    }
  }
  return (
    <div>
      <center>
      {
        data.length > 0 ? 
        <div className='container'>
            <div className='row'>
                {
                data.map((item) => (
                    <div key={item.id} className='col-md-4' style={{padding:"5px"}}>
                    <div className='card' style={{width:"18rem", padding:"3px"}}>
                    <img src={item.url} className='card-img-top' />
                    <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <div className='card-text'>Rs.{item.prize}</div>
                    <button className='btn btn-primary' onClick={() => Handler(item.id,item.name,item.prize,item.url)}>Order</button> 
                    </div>
                    </div>
                    </div>
                    ))
                    }
                </div>
            </div>
            :
            <div>
            </div>
        }
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
    filter_name : state.filterreducer.filter_name,
    table_number : state.tablereducer.table_number
})

export default connect(mapStateToProps,{addorder}) (Card)
