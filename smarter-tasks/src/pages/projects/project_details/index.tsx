import React from "react";

import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";
import { TasksProvider } from "/root/wd301/smarter-tasks/src/context/task/context.ts";

const ProjectDetailsIndex: React.FC = () => {
    return (
      <TasksProvider>
        <ProjectDetails />
        <Outlet />
      </TasksProvider>
    );
  };

export default ProjectDetailsIndex;
