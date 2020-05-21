import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../../helpers/BlockWrapper'
import { Todoist } from './Todoist'
import { todoistKeyState } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import axios from 'axios'

export interface ProjectInterface {
  id: number
  title: string
}

export interface TaskInterface {
  id: number
  projectId: number
  order: number
  text: string
  dueDate: string
  dueDateString: string
}

const TodoistContainer: React.FC = () => {
  const [todoistKey] = useRecoilState(todoistKeyState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState<[] | TaskInterface[]>([])
  const [projects, setProjects] = useState<[] | ProjectInterface[]>([])

  const fetchProjects = () => {
    setLoading(true)
    const url = `https://api.todoist.com/rest/v1/projects`
    axios
      .get(url, { headers: { Authorization: `Bearer ${todoistKey}` } })
      .then(res => {
        const allProjects: ProjectInterface[] = []
        res.data.forEach((proj: any) => {
          let project = {
            id: proj.id,
            title: proj.name
          }
          allProjects.push(project)
        })
        setProjects(allProjects)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Todoist projects')
        setLoading(false)
      })
  }

  const fetchTasks = () => {
    setLoading(true)
    const url = `https://api.todoist.com/rest/v1/tasks`
    axios
      .get(url, { headers: { Authorization: `Bearer ${todoistKey}` } })
      .then(res => {
        const allTasks: TaskInterface[] = []
        res.data.forEach((item: any) => {
          let task = {
            id: item.id,
            projectId: item.project_id,
            order: item.order,
            text: item.content,
            dueDate: item.due ? item.due.date : '',
            dueDateString: item.due ? item.due.string : ''
          }
          allTasks.push(task)
        })
        setTasks(allTasks)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError('There was an error fetching Todoist tasks')
        setLoading(false)
      })
  }

  const completeTask = (taskId: number) => {
    if (
      window.confirm('Are you sure you want to mark this task as completed?')
    ) {
      const url = `https://api.todoist.com/rest/v1/tasks/${taskId}/close`
      axios
        .post(url, {}, { headers: { Authorization: `Bearer ${todoistKey}` } })
        .then(res => {
          fetchTasks()
        })
        .catch(err => {
          setError('There was an error completing this task')
        })
    }
  }

  const createTask = (text: string, date: string, project: number) => {
    const url = `https://api.todoist.com/rest/v1/tasks`
    axios
      .post(
        url,
        {
          content: text,
          due_date: date,
          project_id: project
        },
        {
          headers: {
            Authorization: `Bearer ${todoistKey}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        fetchTasks()
      })
      .catch(err => {
        setError('There was an error adding this task')
      })
  }

  useEffect(() => {
    if (todoistKey) {
      fetchProjects()
      fetchTasks()
    } else {
      setError('You need to set your Todoist key on the settings')
    }
  }, [todoistKey])

  return (
    <BlockWrapper
      isLoading={loading}
      hasError={Boolean(error)}
      error={error}
      name="Todoist"
    >
      <Todoist
        tasks={tasks}
        projects={projects}
        completeTask={completeTask}
        createTask={createTask}
      />
    </BlockWrapper>
  )
}

export default TodoistContainer
