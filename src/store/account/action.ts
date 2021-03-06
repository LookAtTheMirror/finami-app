import {actionObject} from '@utils'
import {
  SIGNIN,
  UPDATE_LANGUAGE,
  UPDATE_NOTIFICATION_TOKEN,
} from './action-types'

export const signin = (payload: any) => actionObject(SIGNIN, payload)

export const updateLanguage = (payload: any) =>
  actionObject(UPDATE_LANGUAGE, payload)

export const updateNotificationToken = (payload: any) =>
  actionObject(UPDATE_NOTIFICATION_TOKEN, payload)
