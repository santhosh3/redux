import React,{useState}from 'react'
import {connect} from 'react-redux'
import {setfilter,resetfilter} from '../Action'

function Filter({setfilter,resetfilter,filter_name}) {
  const prod = ["All Items", "Pizza", "Cold Drinks","Hot Drinks","Rice Items"]
  return (
    <div>
      <center>
        <span className='h4'>Filter:</span>
        <select className='filter' onChange={(e) => setfilter(e.target.value)}>
            {
             prod.map((item,index) => (
                <option value={item} key={index}>{item}</option>
            ))
            }
        </select>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  filter_name : state.filterreducer.filter_name
})
export default connect(mapStateToProps,{setfilter,resetfilter})(Filter)
