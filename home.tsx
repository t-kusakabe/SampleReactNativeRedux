import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { setName, deleteName } from './actions';
import { store } from './store';

export class Home extends Component {
  render() {
    return (
      <View style = {{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style = {{ marginTop: 100 }}>My name is { this.props.name }.</Text>
        <View style = {{ flexDirection: 'row' }}>
          <Button
            onPress = { this.props.deleteName }
            title = 'deleteName'
          />
          <Button
            onPress = { () => this.props.setName('bar') }
            title = 'setName'
          />
        </View>

        <Text style = {{ marginBottom: 100 }}>現在のStore : { JSON.stringify(store.getState()) }</Text>
      </View>
    );
  };
}

const mapStateToProps = (state: any) => ({
  name: state.user.name
});

const mapDispatchToProps = {
  setName,
  deleteName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
