import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProvider } from '../actions';

class HelloWorld extends Component {

  componentWillMount() {
    this.props.fetchProvider(this.props.params.id);
  }

  render() {
    const { provider } = this.props;

    if (!provider) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h4>{provider.name}</h4>
        <p>{provider.phone}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { provider: state.providers.provider }
}

export default connect(mapStateToProps, { fetchProvider })(HelloWorld);
