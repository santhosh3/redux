import React from 'react'
import {connect} from 'react-redux';
import {InAction} from './Action';
import {DecAction} from './Action'

function App({local_varaiable,InAction,DecAction}) {
  return (
    <div>
      <center>
      <h1>{local_varaiable}</h1><br/>
      <button onClick={InAction}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
      </center>
    </div>
  )
}
const mapStateToProps = state => ({
  local_varaiable : state
})

export default connect(mapStateToProps,{InAction,DecAction})(App)
