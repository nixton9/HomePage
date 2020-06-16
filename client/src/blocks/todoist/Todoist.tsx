import React, { useState, useEffect } from 'react'
import { ProjectInterface, TaskInterface } from './TodoistContainer'
import { Select } from '../../components/Select'
import { Modal } from '../../components/Modal'
import { Actions } from '../../components/Actions'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { TodoistStyles } from '../../styles/TodoistStyles'
import { getCurrentDate } from '../../helpers/date'
import { useRecoilState } from 'recoil'
import { todoistModalState } from '../../state/atoms'

interface TodoistProps {
  projects: ProjectInterface[] | []
  tasks: TaskInterface[] | []
  completeTask: (taskId: number) => void
  createTask: (text: string, date: string, project: number) => void
  tasksLoading: boolean
  reload: () => void
}

export const Todoist: React.FC<TodoistProps> = ({
  tasks,
  projects,
  completeTask,
  createTask,
  tasksLoading,
  reload
}) => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [textInput, setTextInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [isModalOpen, setIsModalOpen] = useRecoilState(todoistModalState)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    createTask(textInput, dateInput, selectedProject)
    setTimeout(() => setIsModalOpen(false), 200)
  }

  useEffect(() => {
    const inbox = projects.filter(proj => proj.title === 'Inbox')[0]
    inbox && setSelectedProject(inbox.id)
  }, [projects])

  let visibleTasks =
    tasks.length > 0
      ? tasks
          .filter(task => Number(task.projectId) === Number(selectedProject))
          .sort((a, b) => {
            if (b.dueDate) {
              return b.dueDate < a.dueDate ? 1 : b.dueDate > a.dueDate ? -1 : 0
            } else return -1
          })
      : []

  return (
    <>
      <TodoistStyles>
        <div className="todoist block-overflow">
          <div className="projects">
            <Select
              items={(projects as ProjectInterface[]).map(proj => ({
                val: proj.id,
                name: proj.title
              }))}
              selectedItem={selectedProject}
              setSelectedItem={setSelectedProject}
            />
          </div>
          {tasksLoading ? (
            <div className="inner-loading">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="tasks">
              {visibleTasks.length > 0 ? (
                visibleTasks.map(task => (
                  <div
                    key={task.id}
                    className="task"
                    onClick={() => completeTask(task.id)}
                  >
                    <p className="task__text">{task.text}</p>
                    {task.dueDateString && getCurrentDate() === task.dueDate ? (
                      <span className="task__date">today</span>
                    ) : (
                      <span className="task__date">
                        {task.dueDateString ? task.dueDateString : '-'}
                      </span>
                    )}
                  </div>
                ))
              ) : (
                <div className="nodata">There are no tasks in here</div>
              )}
            </div>
          )}
        </div>
        <Actions reload={reload} openModal={() => setIsModalOpen(true)} />
      </TodoistStyles>
      <Modal
        open={isModalOpen}
        title={'Add Task'}
        closeModal={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task content"
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
          />
          <input
            type="date"
            value={dateInput}
            onChange={e => setDateInput(e.target.value)}
          />
          <button>Send</button>
        </form>
      </Modal>
    </>
  )
}
