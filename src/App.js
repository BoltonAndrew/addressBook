import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    currentName: "",
    currentNum: "",
    addArr: [],
  };

  nameUpdate = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val })
  }

  handleSubmit = (event) => {
    let floatArr = [...this.state.addArr];
    event.preventDefault()
    floatArr.push({"name": `${this.state.currentName}`, "number": `${this.state.currentNum}`})
    this.setState({ addArr: floatArr, currentName: "", currentNum: "" })
  }

  render() {
    let isDisabled = this.state.currentName === "" || this.state.currentNum === ""
    return (
      <div className="App">
        <div className="inputs">
          <form onSubmit={this.handleSubmit}>
            <input className="inputBox" type="text" name="currentName" value={this.state.currentName} onChange={this.nameUpdate}/>
            <input className="inputBox" type="text" name="currentNum" value={this.state.currentNum} onChange={this.nameUpdate}/>
            <button className="submit" type="submit" disabled={isDisabled}>Submit</button>
          </form>
          {this.state.addArr.map((item, index) => {
            return <p key={index}>{item.name}<br />{item.number}</p>
          })}
        </div>
      </div>
    );
  }
}

export default App;
