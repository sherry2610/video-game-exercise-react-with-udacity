import React , {Component} from 'react'
import AddUser from './AddUser'
import ShowUser from './ShowUser'

class VideoGame extends Component{
  
  state = {
            users:[
                {
                    fName:'Shahzeb',
                    lName:'Khan',
                    username:'shah_khan',
                  	nogp:0,
                },
                {
                    fName:'Ali',
                    lName:'Khan',
                    username:'Ali_khan',
                  	nogp:0,
                },
                {
                    fName:'Saud',
                    lName:'Khan',
                    username:'saud_khan',
                  	nogp:0,
                },
                {
                    fName:'Fahad',
                    lName:'Khan',
                    username:'fadi_khan',
                  	nogp:0,
                },
                {
                    fName:'Rauf',
                    lName:'Khan',
                    username:'rauf_khan',
                  	nogp:0,
                },
            ]
        }
 
updateState = (fn,ln,un) => {
  
  
   this.state.users.push({
                    fName:fn,
                    lName:ln,
                    username:un,
                  	nogp:0,
  
  })
  //console.log("+++++++++"+JSON.stringify(this.state.users))
 this.setState({...this.state})

  }

  render(){
    
  	return(
    <div>
      <AddUser data={this.state.users} updateParentState={this.updateState} />
      <ShowUser data={this.state.users} />
      </div>
      )
  }
}
export default VideoGame