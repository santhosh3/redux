import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"

function Header({count}) {
  return (
    <div>
      <div className='navbar navbar-light bg-light'>
        <a className='navar-brand'>Resturant</a>
        <button className='btn btn-primary'>
          <Link to='/orders' style={{color:'white', textDecoration:'none'}}>Orders</Link><span className='badge bg-secondary'>{count}</span>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state.orderreducer.length
})

export default connect(mapStateToProps)(Header)
