import React from 'react';
import {connect} from 'react-redux';

function Orders({list}) {
  return (
    <div>
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
                                    <div className='card-text'>BillingAmount.{item.prize}</div>
                                    <p>table_number : {item.table_number}</p>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            :
            <div>
              No order placed
            </div>
        }
      </center>
    </div>
  )
}

const mapStateToProps = state => {
      list : state.orderreducer
}

export default connect(mapStateToProps)(Orders)
