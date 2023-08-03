import { Button, WhiteSpace } from '@ant-design/react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <Text>标题</Text>
          <Text>列表</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text>body</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',

  },
  header: {
    width: '100%',
    height: '6%',
    backgroundColor: '#f50',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  body: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  box: {
    width: 200,
    height: 200,
    borderWidth: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
  },
})
