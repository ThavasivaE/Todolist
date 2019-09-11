import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(props) {
    this.setState({ text: props.target.value });
  }
  handleClick() {
    this.setState({ list: this.state.list.concat(this.state.text), text: "" });
  }
  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }
  render() {
    return (
      <div>
        <h1>List Items</h1>
        <input
          type="text"
          name="listitem"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button onClick={this.handleClick}>Add</button>
        {this.state.text.length}
        {this.state.text.length == 1
          ? " word is typed"
          : this.state.text.length == 0
          ? " No words are typed yet"
          : " words are typed"}
        <ol>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                {item}

                <button onClick={() => this.removeItem(index)}>Delete</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
