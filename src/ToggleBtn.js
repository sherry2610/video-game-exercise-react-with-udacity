import React , {Component} from 'react'
import UserName from './UserName'
//import PropTypes from 'prop-types'

class ToggleBtn extends Component{
  
  state = {
  		count:0,
    	btnText:"Hide No. of Games Played",
    	text:true,
  }

manageText = () => {
 this.setState(prevState=>({
 	count:prevState.count + 1
 })) 
  this.changeText()
}
changeText = () => {
  return(this.state.count%2===0?(
	 this.setState(prevState=>({
 	  	btnText:"Show No. of Games Played",
       	text:false
}))
    ):( 
  this.setState(prevState=>({
 	  	btnText:"Hide No. of Games Played",
       	text:true
}))
  )
         )
}


  render(){
    
    const usersInObj = Object.values(this.props);
  	const users = Object.values(usersInObj);
	
	return(
    <div>
     
    <button onClick={this.manageText}>{this.state.btnText}</button>
    <ul>
{users[0].data.map((u)=>{
         return(     <li key={u.username}>
                      <UserName name={u.username}  text={this.state.text} nogp={u.nogp} />  
				</li>
			)
	  })

}
</ul>
    </div>
      
     )
  }
}
export default ToggleBtn;