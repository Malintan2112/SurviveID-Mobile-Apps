import * as TYPES from '../Types'
import * as Sessions from '../../Storages/Sessions'

const TAG = 'GENERAL ACTIONS'

/**
 * Counter Function
 * @param {Boolean} increment - Operation type, increment or not (decrement)
 */
export function counterStrike (increment = true) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.COUNTER,
      counter: increment ? getState().counter + 1 : getState().counter - 1
    })
  }
}

export function setImgProfile (url = '') {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.IMAGESURL,
      imgurl: url
    })
  }
}

export function setNotification (status = false) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.NOTIF_STATUS,
      notif_status: status
    })
  }
}
export function setUsername (username = '') {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.USERNAME,
      username: username
    })
  }
}

/**
 * Set App Language
 */
export function setLang (lang) {
  Sessions.setValue(Sessions.LANG, lang)

  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.SET_LANG,
      set_lang: lang
    })
  }
}

export function setProfilePhoto (photoProfile = '') {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.PHOTO_PROFILE,
      photoProfile: photoProfile
    })
  }
}

/**

/**
 * App Refresher
 */
export function setTestingDefault (value) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.DEFAULT_TESTING,
      testingDefault: value
    })
  }
}

export function setActiveMember (data) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.ACTIVE_MEMBER,
      activeMember: data
    })
  }
}

export function setActivePrinter (data) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.ACTIVE_PRINTER,
      activePrinter: data
    })
  }
}

export function login () {
  Sessions.setValue(Sessions.IS_LOGIN, true)
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.ISLOGIN,
      isLogin: true
    })
  }
}

export function setApiToken (token) {
  Sessions.setValue(Sessions.API_TOKEN, token)
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.API_TOKEN,
      apiToken: token
    })
  }
}

export function setUserData (userData) {
  Sessions.setValue(Sessions.USER_DATA, userData)
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.USER_DATA,
      userData: userData
    })
  }
}

export function logout () {
  Sessions.setValue(Sessions.IS_LOGIN, false)
  // Sessions.destroy();
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.ISLOGIN,
      isLogin: false
    })
  }
}
