import { Component } from 'react'
import './App.css'
import { Form } from './components/Form'

class App extends Component {

  state = {
    name: "",
    lastName: "",
  }

  formSubmitHandler = (data) => {
    this.setState({
      name: data.name,
      lastName: data.lastName,
    })
    // this.state({
    //   data: '',
    // })
    console.log(data);
    
  }

  // handleNameChange = (event) => {
  //   this.setState({
  //     name: event.currentTarget.value
  //   });
  // }


    
  // handleLastNameChange = (event) => {
  //   this.setState({
  //     lastName: event.currentTarget.value
  //   });
  // };

  // handleChange = (event) => {
  //   // console.log(event.currentTarget);
  //   // console.log(event.currentTarget.name);
  //   // console.log(event.currentTarget.value);
  //   const { name, value } = event.currentTarget;
  //   this.setState({
  //     // [event.currentTarget.name]: event.currentTarget.value
  //     [name]: value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //     console.log(this.state);
  //     this.reset()
  // }

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     lastName: '',
  //   })
  // }
  
    
  
  render() {
    return (
      <>
        <Form onSubmit={ this.formSubmitHandler} />
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name
            <input value={this.state.name} type="text" onChange={this.handleChange} id='name' name='name' /></label>
          
          <label htmlFor='lastName'>Last Name
            <input value={this.state.lastName} type="text"  onChange={this.handleChange} id='lastName' name='lastName' /></label>
          <button type='submit' >Submit</button>
        </form> */}
      </>
    )
  }
}


export default App