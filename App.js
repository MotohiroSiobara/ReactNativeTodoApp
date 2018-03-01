/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TodoListPage from './TodoListPage';

import {
  Platform,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'TODOリスト',
          component: TodoListPage,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
