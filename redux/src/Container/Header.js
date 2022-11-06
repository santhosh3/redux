import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Header({count}) {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand'>Restaurant</a>
        <button className='btn btn-primary'>
         <Link to='/orders' style={{color:"white",textDecoration:"none"}} >Orders</Link> <span className='badge badge-light'>{count}</span>
        </button>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state.orderreducer.length
})

export default connect(mapStateToProps) (Header)
