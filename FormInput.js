import React, {Component} from 'react';
import {connect} from 'react-redux';

class FormInput extends Component {
  constructor(props) {
    super(props);
    //console.log(this);
    this.state = {};
    this.state.name = this.props.name;
  }

  render(){
    return (
    <div>Im form <br/><br/>
      <div>
        <input type="text" name="name" value= {this.state.name} onChange={(e) => {
          // Trigger an action to update props
           this.setState({name:e.target.value});
        }} />
        <button type="button" onClick={() => this.props.saveName(this.state.name)}>submit</button>
      </div>
      <br/>
      {this.props.name}
    </div>
  );
  }
}


function mapStateToProps (state){
   console.log('mapStateToProps name', state);
  return {
    name: state.nameReducer.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveName: (name) => { 
      console.log('mapDispatchToProps name');
      const action = {type: 'SAVE_NAME', name: name};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);