import { TaskFooterInterface } from "./TaskFooterInterface";
import { TaskHeaderInterface } from "./TaskHeaderInterface";
import { TaskDescription } from "../_taskDescription";
import { TaskDescriptionInterface } from "./TaskDescriptionInterface";
import { StringLiteral } from "typescript";

export interface TaskInterface
  extends TaskHeaderInterface,
    TaskDescriptionInterface,
    TaskFooterInterface {
        id?: string;
        priority?: string;
        status?: string;
    }

