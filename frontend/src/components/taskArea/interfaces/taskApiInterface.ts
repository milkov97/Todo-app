import { Priority } from "../../createTaskForm/enums/Priority";
import { Status } from "../../createTaskForm/enums/Status";

export interface TaskApiInterface {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
