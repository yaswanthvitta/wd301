import React from "react";
import { ProjectData } from "../../context/task/types";
import Column from "./Column";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { useTasksDispatch } from "../../context/task/context";
import { reorderTasks } from "../../context/task/actions";
import { AvailableColumns} from "../../context/task/types";

const Container = (props: React.PropsWithChildren) => {
  return <div className="flex">{props.children}</div>;
};

const DragDropList = (props: {
    data: ProjectData;
  }) => {
    const taskDispatch = useTasksDispatch();
    const onDragEnd: OnDragEndResponder = (result) => {
      const { destination, source, draggableId } = result;
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
      const startKey = source.droppableId as AvailableColumns;
      const finishKey = destination.droppableId as AvailableColumns;
  
      const start = props.data.columns[startKey];
      const finish = props.data.columns[finishKey];
  
      if (start === finish) {
        const newTaskIDs = Array.from(start.taskIDs);
        newTaskIDs.splice(source.index, 1);
        newTaskIDs.splice(destination.index, 0, draggableId);
        const newColumn = {
          ...start,
          taskIDs: newTaskIDs,
        };
        const newState = {
          ...props.data,
          columns: {
            ...props.data.columns,
            [newColumn.id]: newColumn,
          },
        };
        reorderTasks(taskDispatch, newState);
        return;
      }
      // start and finish list are different
  
      const startTaskIDs = Array.from(start.taskIDs);
      // Remove the item from `startTaskIDs`
      const updatedItems = startTaskIDs.splice(source.index, 1);
  
      const newStart = {
        ...start,
        taskIDs: startTaskIDs,
      };
  
      const finishTaskIDs = Array.from(finish.taskIDs);
  
      // Insert the item to destination list.
      finishTaskIDs.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIDs: finishTaskIDs,
      };
  
      // Create new state with newStart and newFinish 
      const newState = {
        ...props.data,
        columns: {
          ...props.data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      reorderTasks(taskDispatch, newState);
    };
}
  
  export default DragDropList;