import { Component } from "react";

export class Form extends Component {
    state = {
    name: "",
    lastName: "",
    level: 'student',
    }

    handleChange = (event) => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({
      // [event.currentTarget.name]: event.currentTarget.value
      [name]: value
    })
    }
    
    handleSubmit = (event) => {
    event.preventDefault()
        console.log(this.state);
        this.props.onSubmit(this.state)
        this.reset()
  }

  reset = () => {
    this.setState({
      name: '',
      lastName: '',
    })
    }
    
    nameInputId = uuidv4();
    lastNameInputId = uuidv4();

    render() {
        return (
        <form   onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>Name
            <input value={this.state.name} type="text" onChange={this.handleChange} id={this.nameInputId} name='name' /></label>
          
          <label htmlFor={this.lastNameInputId}>Last Name
                    <input value={this.state.lastName} type="text" onChange={this.handleChange} id={this.lastNameInputId} name='lastName' /></label>
                <p>Ваш рівень:</p>
                <label htmlFor="">Student<input onChange={this.handleChange} checked={this.state.level==='student'} type="radio" name="level" value="student" />
                </label>
                <label htmlFor="">User<input onChange={this.handleChange} checked={this.state.level==='user'} type="radio" name="level" value="user" />
                </label>
                <label htmlFor="">Admin<input onChange={this.handleChange} checked={this.state.level==='admin'} type="radio" name="level" value="admin" />
                </label>
          <button type='submit' >Submit</button>
        </form>
        )
    }
}