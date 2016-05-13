import React, { Component } from 'react';
import { Router } from 'react-router';
import { connect } from 'react-redux';

export default function(ComposedComponent) {

  class Authentication extends Component {

    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push('/');
      }
    }

    componentWillUpdate(newProps){
      if(!newProps.authenticated){
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.authenticated };
  };

  return connect(mapStateToProps)(Authentication);
}