import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProvider } from '../actions';

class HelloWorld extends Component {

  static fetchData({ store, params }) {
    return store.dispatch(fetchProvider(params.id));
  }

  // A different approach
  // static needs = [
  //   fetchProvider
  // ]

  componentDidMount() {
    if (this.props.provider) return;
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
