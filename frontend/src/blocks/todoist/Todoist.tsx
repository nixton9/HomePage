import React, { useState, useEffect } from 'react'
import { ProjectInterface, TaskInterface } from './TodoistContainer'
import { ProjectsSelect } from './ProjectsSelect'
import { TodoistStyles } from '../../styles/TodoistStyles'
import { getCurrentDate } from '../../helpers/date'
import { Modal } from '../../components/Modal'
import { useRecoilState } from 'recoil'
import { todoistModalState } from '../../state/atoms'
import { FaPlus } from 'react-icons/fa'

interface TodoistProps {
  projects: ProjectInterface[] | []
  tasks: TaskInterface[] | []
  completeTask: (taskId: number) => void
  createTask: (text: string, date: string, project: number) => void
  tasksLoading: boolean
}

export const Todoist: React.FC<TodoistProps> = ({
  tasks,
  projects,
  completeTask,
  createTask,
  tasksLoading
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
          .filter(task => task.projectId == selectedProject)
          .sort((a, b) => a.order - b.order)
      : []
  return (
    <>
      <TodoistStyles>
        <div className="todoist block-overflow">
          <ProjectsSelect
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          {tasksLoading ? (
            <div className="inner-loading">Loading tasks...</div>
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
                <div className="tasks__nodata">There are no tasks in here</div>
              )}
            </div>
          )}
        </div>
        <div className="add-task" onClick={() => setIsModalOpen(true)}>
          <FaPlus />
        </div>
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
