//Above here you would normally declare your Badge class
//var Badge = ...
var Badge = React.createClass({
  render: function() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
});

//Badge has access to this.props
var Form = React.createClass({
  render: function() {
    return <div>
      <Badge title={this.props.title} number={this.props.number}/>
    </div>
  }
});

//create a Form
var options = {
  titile: 'Inbox',
  number: 5
}
//You created two classes and an object. The Form class uses the Button class as one of its elements
//The Form class in rendered below, and takes the javascript object 'options' for its this.props
React.createElement(Form, options)
