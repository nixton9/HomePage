import React, { useState } from 'react'
import GmailContainer from '../blocks/gmail/GmailContainer'
import TodoistContainer from '../blocks/todoist/TodoistContainer'
import GithubContainer from '../blocks/github/GithubContainer'
import Tooltip from 'react-tooltip-lite'
import { MainTabsStyles } from '../styles/MainTabsStyles'
import { FiMail, FiFileText } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import {
  mailCounterState,
  githubCounterState,
  todoistCounterState
} from '../state/atoms'

export const MainTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('gmail')
  const [unreadMailCount] = useRecoilState(mailCounterState)
  const [unreadGithubCount] = useRecoilState(githubCounterState)
  const [todoistTaskCount] = useRecoilState(todoistCounterState)

  let title
  switch (selectedTab) {
    case 'github':
      title = 'Latest notifications'
      break
    case 'todoist':
      title = 'Todoist tasks'
      break
    default:
      title = 'Latest emails'
  }

  return (
    <MainTabsStyles>
      <div className="tabs__icons">
        <div
          className={
            selectedTab === 'gmail'
              ? 'tabs__icons__single-icon selected'
              : 'tabs__icons__single-icon'
          }
          onClick={() => setSelectedTab('gmail')}
        >
          {unreadMailCount ? (
            <span className="counter">{unreadMailCount}</span>
          ) : (
            ''
          )}
          <Tooltip content="Gmail" direction={'up'} arrow={false}>
            <FiMail />
          </Tooltip>
        </div>
        <div
          className={
            selectedTab === 'github'
              ? 'tabs__icons__single-icon selected'
              : 'tabs__icons__single-icon'
          }
          onClick={() => setSelectedTab('github')}
        >
          {unreadGithubCount ? (
            <span className="counter">{unreadGithubCount}</span>
          ) : (
            ''
          )}
          <Tooltip content="Github" direction={'up'} arrow={false}>
            <FaGithub />
          </Tooltip>
        </div>
        <div
          className={
            selectedTab === 'todoist'
              ? 'tabs__icons__single-icon selected'
              : 'tabs__icons__single-icon'
          }
          onClick={() => setSelectedTab('todoist')}
        >
          {todoistTaskCount ? (
            <span className="counter">{todoistTaskCount}</span>
          ) : (
            ''
          )}
          <Tooltip content="Todoist" direction={'up'} arrow={false}>
            <FiFileText />
          </Tooltip>
        </div>
      </div>
      <div className="tabs__header">
        <p>{title}</p>
      </div>
      <div className="tabs__content">
        <div
          className={
            selectedTab === 'gmail'
              ? 'tabs__content__single-content active'
              : 'tabs__content__single-content'
          }
        >
          <GmailContainer />
        </div>
        <div
          className={
            selectedTab === 'github'
              ? 'tabs__content__single-content active'
              : 'tabs__content__single-content'
          }
        >
          <GithubContainer />
        </div>
        <div
          className={
            selectedTab === 'todoist'
              ? 'tabs__content__single-content active'
              : 'tabs__content__single-content'
          }
        >
          <TodoistContainer />
        </div>
      </div>
    </MainTabsStyles>
  )
}
