var React = require("./node_modules/bower_components/react/react.js");
var Widget = React.createClass({
  getInitialState: function(){
    return{
      number: 0
    }
  },
  increment: function(){
    this.setState({
      number: this.state.number + 1
    })
  },
  render: function(){
  var data =[1,2,3,4];
  var content = data.map(function(key, item){
    return (<h2 key = {key} >integer is {item}</h2>)
  });
    return(
    <div>
      <span>{content}</span>
      <button onClick = {this.increment}>Inc</button>
    </div>);
  }
});
React.render(<Widget text = {"中国"}/>, document.getElementById("app"));
