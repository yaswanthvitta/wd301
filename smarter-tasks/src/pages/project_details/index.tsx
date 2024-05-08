import React from "react";

import ProjectDetails from "./ProjectDetails";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context.tsx";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectDetailsIndex: React.FC = () => {
    return (
      <TasksProvider>
        <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
        <Outlet />
      </TasksProvider>
    );
  };

export default ProjectDetailsIndex;
