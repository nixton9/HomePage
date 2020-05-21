import React, { useState, useEffect } from 'react'
import { ProjectInterface, TaskInterface } from './TodoistContainer'
import { TodoistBlock } from '../../styles/TodoistBlock'
import { currentDateToString } from '../../helpers/date'

interface TodoistProps {
  projects: ProjectInterface[] | []
  tasks: TaskInterface[] | []
  completeTask: (taskId: number) => void
  createTask: (text: string, date: string, project: number) => void
}

export const Todoist: React.FC<TodoistProps> = ({
  tasks,
  projects,
  completeTask,
  createTask
}) => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [textInput, setTextInput] = useState('')
  const [dateInput, setDateInput] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    createTask(textInput, dateInput, selectedProject)
  }

  useEffect(() => {
    const inbox = projects.filter(proj => proj.title === 'Inbox')[0]
    inbox && setSelectedProject(inbox.id)
  }, [projects])

  let visibleTasks =
    tasks.length > 0
      ? tasks
          .filter(task => task.projectId === selectedProject)
          .sort((a, b) => a.order - b.order)
      : []

  return (
    <TodoistBlock>
      <div className="projects">
        {(projects as Array<ProjectInterface | []>).map((proj: any) => (
          <div
            key={proj.id}
            className={
              selectedProject === proj.id
                ? 'project project--selected'
                : 'project'
            }
            onClick={() => setSelectedProject(proj.id)}
          >
            <h3 className="project__title">{proj.title}</h3>
          </div>
        ))}
      </div>

      <div className="tasks">
        {visibleTasks.length > 0 ? (
          visibleTasks.map(task => (
            <div
              key={task.id}
              className="task"
              onClick={() => completeTask(task.id)}
            >
              <p className="task__text">{task.text}</p>
              {task.dueDateString && currentDateToString() === task.dueDate ? (
                <span className="task__date">today</span>
              ) : (
                <span className="task__date">{task.dueDateString}</span>
              )}
            </div>
          ))
        ) : (
          <div className="tasks__nodata">There are no tasks in here</div>
        )}
      </div>
      <div>
        <h3>Add task</h3>
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
          <input type="submit" />
        </form>
      </div>
    </TodoistBlock>
  )
}
