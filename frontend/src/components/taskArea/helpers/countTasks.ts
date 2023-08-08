import { TaskCounterStatusType } from "../../taskCounter/interfaces/TaskCounterInterface";
import { TaskApiInterface } from "../interfaces/taskApiInterface";

export const countTasks = (
  tasks: TaskApiInterface[],
  status: TaskCounterStatusType
): number => {
    if (!Array.isArray(tasks)){
        return 0;
    }
    const totalTasks = tasks.filter((task)=>{
        return task.status === status;
    })
    return totalTasks.length;
};
