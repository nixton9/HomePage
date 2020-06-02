import React, { useEffect } from 'react'
import { Modal } from './Modal'
import { useRecoilState } from 'recoil'
import {
  usernameState,
  backgroundState,
  instagramUserState,
  todoistKeyState,
  githubKeyState,
  settingsModalState
} from '../state/atoms'

export const Settings = () => {
  const [username, setUsername] = useRecoilState(usernameState)
  const [background, setBackground] = useRecoilState(backgroundState)
  const [instagramUser, setInstagramUser] = useRecoilState(instagramUserState)
  const [todoistKey, setTodoistKey] = useRecoilState(todoistKeyState)
  const [githubKey, setGithubKey] = useRecoilState(githubKeyState)
  const [isModalOpen, setIsModalOpen] = useRecoilState(settingsModalState)

  const saveData = () => {
    localStorage.setItem('username', username)
    localStorage.setItem('background', background)
    localStorage.setItem('instagramUser', instagramUser)
    localStorage.setItem('todoistKey', todoistKey)
    localStorage.setItem('githubKey', githubKey)
    setTimeout(() => setIsModalOpen(false), 200)
  }

  const getItemsFromLocalStorage = () => {
    localStorage.getItem('username') &&
      setUsername(localStorage.getItem('username'))

    localStorage.getItem('background') &&
      setBackground(localStorage.getItem('background'))

    localStorage.getItem('instagramUser') &&
      setInstagramUser(localStorage.getItem('instagramUser'))

    localStorage.getItem('todoistKey') &&
      setTodoistKey(localStorage.getItem('todoistKey'))

    localStorage.getItem('githubKey') &&
      setGithubKey(localStorage.getItem('githubKey'))
  }

  useEffect(() => {
    getItemsFromLocalStorage()
  }, [])

  return (
    <Modal
      open={isModalOpen}
      title={'Settings'}
      closeModal={() => setIsModalOpen(false)}
    >
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Background image"
        value={background}
        onChange={e => setBackground(e.target.value)}
      />
      <input
        type="text"
        placeholder="Instagram user"
        value={instagramUser}
        onChange={e => setInstagramUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todoist key"
        value={todoistKey}
        onChange={e => setTodoistKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Github key"
        value={githubKey}
        onChange={e => setGithubKey(e.target.value)}
      />
      <button onClick={saveData}>Save</button>
    </Modal>
  )
}
