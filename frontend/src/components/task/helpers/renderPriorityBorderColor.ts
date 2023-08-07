import { Priority } from "../../createTaskForm/enums/Priority";

export const renderPriorityBorderColor = (priority: string) => {
  switch (priority) {
    case Priority.normal:
      return "grey.900";
    case Priority.high:
      return "error.light";
    case Priority.low:
      return "info.light";
    default:
      return "grey.900";
  }
};
