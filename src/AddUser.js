import React , {Component} from 'react'

const initialState = {
    fName:'',
    lName:'',
    userName:'',
    conditionalElement:'',
};

class AddUser extends Component{
 
  state = {...initialState}
 reset=()=> {
        this.setState(initialState);
    }
	forFn=event=>{
    this.setState({fName: event.target.value});
    }
	forLn=event=>{
    this.setState({lName: event.target.value});
    }
	forUn=event=>{
    this.setState({userName: event.target.value});
    }
 checkForAdd= () =>{
  return ((this.state.fName && this.state.lName && this.state.userName)?'':'disabled')
 }
 

submitData = (event) => {
  
  event.preventDefault();
  let obj = this.props.data.find(o => o.username === this.state.userName);
  console.log(obj)
    if(obj){
    this.setState({conditionalElement:'USERNAME ALREADY EXIST. PLEASE TRY ANOTHER NAME'});
      
      
  }else{
   		this.grandUpdate();
    	this.reset();
    
  }

}
grandUpdate = () => {
   this.props.updateParentState(this.state.fName,this.state.lName,this.state.userName);
  }
  
  render(){
     
  
  	return(
      
      <div>
  
      <form onSubmit={this.submitData}>
	
      <input 
      type="text"
      placeholder="First Name"
		value={this.state.fName}
		name="fname"
		onChange={this.forFn}
      />
      <input 
      type="text"
      placeholder="Last Name"
		value={this.state.lName}
		onChange={this.forLn}
      />
      <input 
      type="text"
      placeholder="User Name"
		value={this.state.userName}
		onChange={this.forUn}
      />
      <button disabled={this.checkForAdd()} value="submit">ADD</button>
		<p style={{color:'red'}}>{this.state.conditionalElement}</p>
      </form>
      </div>
     )
  }
}
export default AddUser