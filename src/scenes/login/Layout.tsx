import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {LayoutProps} from './types';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

export const Layout: React.FunctionComponent<LayoutProps> = () => (
  <View style={styles.container}>
    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LOGO</Text>
    </View>
    <View style={{flex: 1}}>
      <Text>Welcome Back</Text>
      <Text>
        Lorem ipsum text dummy sha sabes Lorem ipsum text dummy sha sabes Lorem
        ipsum text dummy sha sabes Lorem ipsum text dummy sha sabes Lorem ipsum
        text dummy sha sabes
      </Text>
    </View>
    <View style={[styles.secondaryContainer, {flex: 2}]}>
      <TextInput
        label={'Email'}
        maxLength={40}
        mode={'flat'}
        placeholder={'Email'}
        onChangeText={() => console.warn('cambio el texto')}
      />
      <TextInput
        label={'Password'}
        maxLength={40}
        mode={'flat'}
        placeholder={'Password'}
        onChangeText={() => console.warn('cambio el texto')}
        secureTextEntry={true}
      />
    </View>
    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Text>Forgot Password?</Text>
    </View>
    <View style={styles.secondaryContainer}>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Sign up
      </Button>
    </View>
  </View>
);
