import codePush from 'react-native-code-push'
import React, { useEffect, useState } from 'react'
import config from '../../config'
import { Text, View, Image, ActivityIndicator, Dimensions } from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import * as Sessions from '../Storages/Sessions.js'
import AppActions from '../Redux/Actions'
import { useDispatch } from 'react-redux'

const CodePushService = props => {
  const [status, setStatus] = useState(0)
  const [progress, setProgress] = useState(0)
  const dispatch = useDispatch()
  const desc = [
    'Aplikasi sudah siap',
    'Package berhasil ter install, please restart apps ',
    '',
    'Network request failed',
    '',
    'Pengecekan fitur baru',
    '',
    'Unduh pembaharuan apps ',
    'Installing fitur baru'
  ]
  const doneCodePush = () => {
    Sessions.prepare()
      .then(dataSession => {
        if (dataSession?.IS_LOGIN) {
          dispatch(AppActions.login())
          dispatch(AppActions.setApiToken(dataSession?.API_TOKEN))
          dispatch(AppActions.setUserData({ ...dataSession?.USER_DATA }))
          dispatch(AppActions.setActivePrinter({ ...dataSession?.PRINTER }))
          props.navigation.replace('HomePage')
        } else {
          props.navigation.replace('LoginPage')
        }
      })
      .catch(err => {})
  }
  useEffect(() => {
    if (config?.codePushProd) {
      codePush
        .sync(
          { installMode: codePush.InstallMode.IMMEDIATE },
          statusCodePush => {
            setStatus(statusCodePush)
            switch (statusCodePush) {
              case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                console.log('Checking for updates.')
                break
              case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                console.log('Downloading package.')
                codePush.disallowRestart()
                break
              case codePush.SyncStatus.INSTALLING_UPDATE:
                console.log('Installing update.')
                break
              case codePush.SyncStatus.UP_TO_DATE:
                doneCodePush()
                console.log('Up-to-date.')
                break
              case codePush.SyncStatus.UPDATE_INSTALLED:
                if (!__DEV__) {
                  setTimeout(() => {
                    codePush.allowRestart()
                  }, 2000)
                } else {
                  props.navigation.replace('LoginPage')
                }
                console.log('Update installed.')
                break
              case codePush.SyncStatus.UNKNOWN_ERROR:
                doneCodePush()
                console.log('Up-to-date.')
                break
            }
          },
          progress => {
            const currProgress = parseFloat(
              progress.receivedBytes / progress.totalBytes
            ).toFixed(2)
            setProgress(currProgress)
          }
        )
        .catch((err = {}) => console.log(err))
    }
  }, [])
  useEffect(() => {}, [])
  const { width, height } = Dimensions.get('screen')
  const refineWidth = 392.72727272727275
  const heightFooter = (180 / refineWidth) * width
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          zIndex: 1,
          justifyContent: 'center',
          flex: 1,
          width: '100%',
          height: height - heightFooter + 90
        }}
      >
        <View>
          <Image
            source={require('../Assets/Images/LoginAsset/logo.webp')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 90,
              height: 80,
              alignSelf: 'center',
              marginBottom: 5
            }}
            resizeMode='contain'
          />
          <Text
            allowFontScaling={false}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: '#313339',
              width: 250,
              alignSelf: 'center',
              fontFamily: 'Inter-Bold',
              fontSize: 14,
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            ARTETIS.COM
          </Text>
        </View>
        <View>
          <Text
            allowFontScaling={false}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: '#313339',
              width: 250,
              alignSelf: 'center',
              fontFamily: 'Inter-Regular',
              fontSize: 12,
              marginBottom: 10,
              textAlign: 'center'
            }}
          >
            Lebih mudah, Lebih praktis dan Gratis
          </Text>
          <View style={{ alignSelf: 'center' }}>
            {status === 7 ? (
              <View>
                <ProgressBar
                  unfilledColor='#dfe4ea'
                  progress={Number(progress)}
                  persentase={Number(progress)}
                  width={width * 0.7}
                  color='#F4B120'
                />
                <Text
                  allowFontScaling={false}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    color: '#313339',
                    alignSelf: 'center',
                    fontFamily: 'Inter-Regular',
                    fontSize: 8,
                    marginTop: 5,
                    marginRight: 5,
                    textAlign: 'center'
                  }}
                >
                  {desc[status]}
                </Text>
              </View>
            ) : (
              <View style={{ flexDirection: 'row' }}>
                <Text
                  allowFontScaling={false}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    color: '#313339',
                    alignSelf: 'center',
                    fontFamily: 'Inter-Regular',
                    fontSize: 8,
                    marginRight: 5,
                    textAlign: 'center'
                  }}
                >
                  {desc[status]}
                </Text>
                {status === 0
                  ? (
                    <Icon name='check' size={10} color='#377149' />
                    )
                  : status === 1
                    ? (
                      <Icon name='refresh' size={10} color='#F4B120' />
                      )
                    : (
                      <ActivityIndicator color='#0000ff' size={10} />
                      )}
              </View>
            )}
          </View>
        </View>
      </View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: '#C6C7CB',
          width: 250,
          alignSelf: 'center',
          fontFamily: 'Inter-Regular',
          fontSize: 8,
          position: 'absolute',
          textAlign: 'center',
          bottom: heightFooter - 50
        }}
      >
        Version 1.0.0 v12
      </Text>
      <Image
        source={require('../Assets/Images/LoginAsset/footer.webp')}
        style={{
          width: width,
          height: heightFooter,
          position: 'absolute',
          bottom: 0
        }}
        resizeMode='contain'
      />
    </View>
  )
}

export default CodePushService
