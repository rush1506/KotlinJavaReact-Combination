'use strict';

import React from 'react';  
import Modal from "react-native-modalbox";
import TeenidolEventNavigation from './TeenidolEventNavigation';
import ProgressBar from "./src/loaders/ProgressBar";

var codePush = require("react-native-code-push");
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0
    };
  }

   componentDidMount() {
     var updateDialogOptions = {
        updateTitle: "Update event mới nào",
        optionalUpdateMessage: "Update nào",
        optionalIgnoreButtonLabel: "Không update",
        optionalInstallButtonLabel: "Ok",
    };

    codePush.sync(
      { updateDialog: updateDialogOptions, 
        installMode: CodePush.InstallMode.IMMEDIATE },
      status => {
        switch (status) {
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            this.setState({ showDownloadingModal: true });
            this._modal.open();
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            this.setState({ showInstalling: true });
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            this._modal.close();
            this.setState({ showDownloadingModal: false });
            break;
          default:
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {
        this.setState({ downloadProgress: receivedBytes / totalBytes * 100 });
      }
        );
  }
  render() {
    if (this.state.showDownloadingModal) {
      return (
        <Container>
          <Content style={styles.container}>
            <Modal
              style={[styles.modal, styles.modal1]}
              backdrop={false}
              ref={c => {
                this._modal = c;
              }}
              swipeToClose={false}
            >
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  padding: 20
                }}
              >
                {this.state.showInstalling
                  ? <Text
                      style={{
                        color: theme.brandPrimary,
                        textAlign: "center",
                        marginBottom: 15,
                        fontSize: 15
                      }}
                    >
                      Installing update...
                    </Text>
                  : <View
                      style={{
                        flex: 1,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        padding: 20
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          marginBottom: 15,
                          fontSize: 15
                        }}
                      >
                        Downloading update...
                        {" "}
                        {`${parseInt(this.state.downloadProgress, 10)} %`}
                      </Text>
                      <ProgressBar
                        progress={parseInt(this.state.downloadProgress, 10)}
                      />
                    </View>}
              </View>
            </Modal>
          </Content>
        </Container>
      );
    }


    return (
      <View style={styles.container}>
         <TeenidolEventNavigation></TeenidolEventNavigation>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal1: {
    height: 300
  } 
});
// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
// HelloWorld = codePush(HelloWorld);
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
