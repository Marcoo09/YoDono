import React, {Component} from 'react';
import {AppContainer} from './src/navigation';
import {setNavigator} from './src/common/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {store} from './src/store/store';
import {Provider as ReduxProvider} from 'react-redux';
import {loadPersistedSession} from './src/hocs/loadPersistedSession';

interface State {
  isSessionLoaded: boolean;
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isSessionLoaded: false,
    };
  }

  public async componentDidMount() {
    loadPersistedSession(() => {
      this.setState({
        isSessionLoaded: true,
      });
    });
  }

  public render() {
    if (!this.state.isSessionLoaded) {
      return null;
    }

    return (
      <ReduxProvider store={store}>
        <PaperProvider>
          <AppContainer ref={setNavigator} />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}
