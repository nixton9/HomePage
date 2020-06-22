import { atom } from 'recoil'

export const usernameState = atom({
  key: 'username',
  default: ''
})

export const backgroundState = atom({
  key: 'background',
  default: ''
})

export const backgroundOpacityState = atom({
  key: 'backgroundOpacity',
  default: 0.6
})

export const instagramUserState = atom({
  key: 'instagramUser',
  default: ''
})

export const todoistKeyState = atom({
  key: 'todoistKey',
  default: ''
})

export const githubKeyState = atom({
  key: 'githubKey',
  default: ''
})

export const settingsModalState = atom({
  key: 'settingsModalOpen',
  default: false
})

export const todoistModalState = atom({
  key: 'todoistModalOpen',
  default: false
})

export const websitesModalState = atom({
  key: 'websitesModalOpen',
  default: false
})

export const stocksModalState = atom({
  key: 'stocksModalOpen',
  default: false
})

export const mailCounterState = atom({
  key: 'mailCounter',
  default: 0
})

export const todoistCounterState = atom({
  key: 'todoistCounter',
  default: 0
})

export const githubCounterState = atom({
  key: 'githubCounter',
  default: 0
})
