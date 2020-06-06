import React, { useEffect } from 'react'
import { Modal } from './Modal'
import { useRecoilState } from 'recoil'
import Tooltip from 'react-tooltip-lite'
import {
  usernameState,
  backgroundState,
  backgroundOpacityState,
  todoistKeyState,
  githubKeyState,
  settingsModalState
} from '../state/atoms'

export const Settings = () => {
  const [username, setUsername] = useRecoilState(usernameState)
  const [todoistKey, setTodoistKey] = useRecoilState(todoistKeyState)
  const [githubKey, setGithubKey] = useRecoilState(githubKeyState)
  const [background, setBackground] = useRecoilState(backgroundState)
  const [bgOpacity, setBgOpacity] = useRecoilState(backgroundOpacityState)
  const [isModalOpen, setIsModalOpen] = useRecoilState(settingsModalState)

  const saveData = () => {
    localStorage.setItem('username', username)
    localStorage.setItem('background', background)
    localStorage.setItem('bgOpacity', bgOpacity)
    localStorage.setItem('todoistKey', todoistKey)
    localStorage.setItem('githubKey', githubKey)
    setTimeout(() => setIsModalOpen(false), 200)
  }

  const getItemsFromLocalStorage = () => {
    localStorage.getItem('username') &&
      setUsername(localStorage.getItem('username'))

    localStorage.getItem('background') &&
      setBackground(localStorage.getItem('background'))

    localStorage.getItem('bgOpacity') &&
      setBgOpacity(localStorage.getItem('bgOpacity'))

    localStorage.getItem('todoistKey') &&
      setTodoistKey(localStorage.getItem('todoistKey'))

    localStorage.getItem('githubKey') &&
      setGithubKey(localStorage.getItem('githubKey'))
  }

  useEffect(getItemsFromLocalStorage, [])

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
      <input
        type="text"
        placeholder="Background image"
        value={background}
        onChange={e => setBackground(e.target.value)}
      />
      <Tooltip content="Background opacity" direction={'up'} arrow={false}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={bgOpacity}
          onChange={e => setBgOpacity(e.target.value)}
        />
      </Tooltip>
      <button onClick={saveData}>Save</button>
    </Modal>
  )
}
