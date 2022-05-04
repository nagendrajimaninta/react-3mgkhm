import React,{Component} from "react";
import "./style.css";
class Number extends React.Component{
  render(){
    return 4
  }
}
class Sample extends React.Component{
constructor(props){
  super(props);
  this.state ={
    name : this.props.name
  };
}
  render(){
    return (
      <>
      <Number />
      <h1>{this.state.name} {this.props.age} is having 4 years of experience .</h1>
      </>
    );
  }
}
export default function App() {
  return (
    <div>
      <Sample name="Nagendra" age="25"/>
      <Sample name="Maruthi" age="27"/>
      <Sample name="Nani" age="6"/>
      <Sample name="Jagadeep" age="7"/>
      <Sample name="Uma devi" age="27"/>
      <h1>Above is Passing data to a component!</h1>
      <p>In a Class Component data is fetched using this.props.data :)</p>
    </div>
  );
}
