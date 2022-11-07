import React from 'react'
import {connect} from 'react-redux'
import Header from './Container/Header'

function Order({list}) {
  console.log(list)
  return (
    <div>
      <Header />
      <center>
      {
        list.length > 0 ? 
        <div className='container'>
            <div className='row'>
                {
                list.map((item) => (
                    <div key={item.id} className='col-md-4' style={{padding:"5px"}}>
                    <div className='card' style={{width:"18rem", padding:"3px"}}>
                    <img src={item.url} className='card-img-top' />
                    <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <div className='card-text'>Billing Amount.{item.prize}</div>
                    <div className='card-text'>table_number.{item.table_number}</div>
                    </div>
                    </div>
                    </div>
                    ))
                    }
                </div>
            </div>
            :
            <div>
              No orders placed
            </div>
        }
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
   list : state.orderreducer
})

export default connect(mapStateToProps) (Order)
