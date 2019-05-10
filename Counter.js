import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
  console.log('Counter', props);
  return (
    <div>Im counter  {props.count}<br/><br/>
      <button 
      onClick={props.onIncrement}> Increment</button>
    </div>
  );
}

function mapStateToProps (state){
   console.log('mapStateToProps counter', state);
  return {
    count: state.incrementReducer.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => { 
      console.log('mapDispatchToProps counter');
      const action = {type: 'INCR'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);