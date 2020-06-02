// @ts-nocheck
import React from 'react'
import { ProjectInterface } from './TodoistContainer'

interface ProjectsSelectProps {
  projects: ProjectInterface[] | []
  selectedProject: number
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>
}

export const ProjectsSelect: React.FC<ProjectsSelectProps> = ({
  projects,
  selectedProject,
  setSelectedProject
}) => {
  return (
    <div className="projects">
      <select
        defaultValue={selectedProject}
        onChange={e => setSelectedProject(e.target.value)}
      >
        {projects.map(proj => (
          <option key={proj.id} value={proj.id}>
            {proj.title}
          </option>
        ))}
      </select>
    </div>
  )
}
