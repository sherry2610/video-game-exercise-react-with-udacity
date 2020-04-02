import React from 'react'

const UserName = props => {
  
  return (
  	props.text?(<div><b>{props.name}</b> played {props.nogp}</div>):(<div><b>{props.name}</b></div>)
    )
}

export default UserName;