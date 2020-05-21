import { atom } from 'recoil'

export const usernameState = atom({
    key: 'username',
    default: ''
})

export const backgroundState = atom({
    key: 'background',
    default: ''
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