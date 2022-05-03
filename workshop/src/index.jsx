// External libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Internal libraries
import '../assets/stylesheets/application.scss';
import App from './components/App';

// // This component is a stateless (or a functional) component
// // We use props for things that doesn't change and state for things that do.
// // const Hello = ( props ) => {
// //   return <h1>Hello, {props.name}</h1>;
// // }

// // A stateful component needs to constructor(props)
// // be promoted into a class
// class Hello extends Component {
//   constructor(props) {
//     // in the constructor
//     // we just super the props element we received.
//     // static data is carried by props
//     super(props);

//     // we then set the state. State is the information which may change during
//     // the lifetime of the component. Here we store the element
//     // which states the fact that we clicked on the element or not.
//     // Components can also contains their own states.
//     // Example here with counter.
//     // Mutable data is carried by state
//     this.state = {
//       clicked: true,
//       counter: 0
//     };
//   }

//   handleClick = () => {
//     // Here we change the state in the click method.
//     // We use the setState method to handle the State change.
//     // "this" here is the component instance.
//     // so we need to update and define the handleClick method and use arrow function
//     // We just used the setState instead of having to to add.event.listener etc.
//     // Anythime a component's state changes, (this.setState)
//     // its render() method is calledback.
//     // We should always use this.setState() to update a cstate.
//     // we cannot do directly this.state.clicked = true,
//     // we need to call setState() before
//     this.setState({
//       clicked: !this.state.clicked,
//       counter: this.state.counter + 1
//     })
//   }

//     //   // With plain JS, handleClick method.

//     // // We first select the element.
//     // const div = document.querySelector('div');
//     // // To listen to the click, we do addEventListenr to Click
//     // // We do a callback with event to check the class and if it exist
//     // // we add it or remove it.
//     // div.addEventListener('click', (event) => {
//     //   if (event.currentTarget.contains('clicked')) {
//     //     event.currentTarget.classList.remove('clicked');
//     //   } else {
//     //     event;currentTarget.classList.add('clicked');
//     //   };
//     // });

//   // The render is the method called to build HTML elements.
//   render() {
//     return (
//       // Here we add a class if the state.clicked is true.
//       // We add a callback in the class to listen to the event when we click
//       <div className={this.state.clicked ? 'clicked' : null} onClick={this.handleClick}>
//         Hello {this.props.name} {this.state.counter}
//       </div>
//     )
//   }
// }

// const root = document.getElementById("root");
// ReactDOM.render(<Hello name="boris" />, root);
// // the value "Boris" won't change during the time helloBoris is
// // displayed in the DOM. "Boris" is an intrinsic property of the
// // `helloBoris` instance of the `Hello` component.

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
