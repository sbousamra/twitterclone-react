import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {loginAction} from '../actions/actions';

export default function(Component) {
  class Authentication extends React.Component {

    componentDidMount() {
      this.props.getData()
    }

    render() {
      return (
        <div>
          <Component {...this.props}/>
        </div>
      )
    }
  }

  function mapDispatchToProps(dispatch) {
    return ({
      getData: () => {
        axios.get('/timeline').then((res) => {
          dispatch(loginAction(res.data))
        }).catch((error) => {
          console.log(error)
        })
      }
    })
  }

  return connect(null, mapDispatchToProps)(Authentication)
}

