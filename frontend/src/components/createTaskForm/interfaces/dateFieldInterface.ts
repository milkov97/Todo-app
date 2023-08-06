import { DisabledInterface } from "./disabledInterface";


export interface DateFieldInterface extends DisabledInterface {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
}