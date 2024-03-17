import React, { Component } from "react";
import Editpage from "../editpage/Editpage";
import "./Home.css";

export default class Home extends Component {
  state = {
    input: "",
    items: [],
    editview: false,
    editval: [""],
    editkey: "",
  };
  newfun = (ind) => {
    const { items, editkey } = this.state;
    const val = ind;
    items.splice(editkey, 1, val);
    this.setState({
      editview: false,
    });
  };
  editfun = (key) => {
    const { items } = this.state;

    this.setState({
      editval: items.filter((value, index) => index === key),
      editkey: key,

      editview: true,
    });
  };
  oncha = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  onsub = (event) => {
    event.preventDefault();
    const { items, input } = this.state;

    this.setState({
      items: input !== "" ? [...items,input] : [...items],

      input: "",
    });
  };
  delfun = (key) => {
    const { items } = this.state;
    // const allitems = this.state.items;
    // allitems.splice(key, 1);
    this.setState({
      // items: allitems,
      items: items.filter((value, index) => index !== key),
    });
    console.log(items);
  };
  render() {
    console.log("edited value=" + this.state.val);
    const { items, editview } = this.state;
    console.log(items);
    return (
      <div className="Home">
        {editview && (
          <Editpage editdata={this.state.editval} newfun={this.newfun} />
        )}
        <div className="todo">
          <h1>Keep Note</h1>
          <form action="" onSubmit={this.onsub}>
            <div className="input">
              <input
                type="text"
                placeholder="Note Here..."
                onChange={this.oncha}
                value={this.state.input}
              />
            </div>
            <button>Add</button>
          </form>
        </div>

        {items.map((value, index) => {
          return (
            <div className="list" key={index}>
              {value}
              <span className="itag">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => this.delfun(index)}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => this.editfun(index)}
                ></i>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
