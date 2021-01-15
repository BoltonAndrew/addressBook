import React from 'react';
import './App.css';

let floatArr = [];
console.log(floatArr)

class App extends React.Component {
  state = {
    currentName: "",
    currentNum: "",
    inputName: "",
    inputNum: "",
    addArr: [],
  };

  nameUpdate = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val })
  }
  
  buttonClick = (event) => {
    event.preventDefault()
    this.setState({ inputName: this.state.currentName })
    this.setState({ inputNum: this.state.currentNum })
    let person = {"name": `${this.state.inputName}`, "number": `${this.state.inputNum}`}
    if (this.state.currentName !== "" && this.state.currentNum !== "") {
      floatArr.push(person);
    }
    this.setState({ addArr: floatArr })
    console.log(this.state.addArr)
  }

  render() {
    return (
      <div className="App">
        <div className="inputs">
          <form>
            <input className="inputBox" type="text" name="currentName" onChange={this.nameUpdate}/>
            <input className="inputBox" type="text" name="currentNum" onChange={this.nameUpdate}/>
            <button className="submit" onClick={this.buttonClick}></button>
          </form>
          {this.state.addArr.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })}
        </div>
      </div>
    );
  }
}

export default App;
