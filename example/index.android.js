/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import DatePicker from 'react-native-datepicker';

class example extends Component {

  state = {
    date: '2016-05-06',
    time: '20:00',
    datetime: '2016-05-05 20:00'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to react-native-datepicker example!
        </Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <Text style={styles.instructions}>date: {this.state.date}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          onDateChange={(time) => {this.setState({time: time})}}
        />
        <Text style={styles.instructions}>time: {this.state.time}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.datetime}
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
          onDateChange={(datetime) => {this.setState({datetime: datetime})}}
        />
        <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
