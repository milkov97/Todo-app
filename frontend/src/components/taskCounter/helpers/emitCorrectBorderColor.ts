import { TaskCounterStatusType } from "../interfaces/TaskCounterInterface";
import { Status } from "../../createTaskForm/enums/Status";


export const emitCorrectBorderColor = (status: TaskCounterStatusType): string => {
  switch(status){
    case Status.todo:
        return 'error.light';
    case Status.inProgress:
        return 'warning.light';
    case Status.completed:
        return 'success.light'
  }
};
