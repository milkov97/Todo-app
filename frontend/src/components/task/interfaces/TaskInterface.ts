import { TaskFooterInterface } from "./TaskFooterInterface";
import { TaskHeaderInterface } from "./TaskHeaderInterface";
import { TaskDescriptionInterface } from "./TaskDescriptionInterface";

export interface TaskInterface
  extends TaskHeaderInterface,
    TaskDescriptionInterface,
    TaskFooterInterface {
        id?: string;
        priority?: string;
        status?: string;
    }

