import {StyleSheet} from 'react-native';
import {Color} from '@theme/color';

export const Container = StyleSheet.create({
  white: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  selago: {
    flex: 1,
    backgroundColor: Color.Selago,
  },
});

export const Content = StyleSheet.create({
  white: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  transparent: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  titleBar: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
