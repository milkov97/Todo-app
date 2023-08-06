import { DisabledInterface } from "./disabledInterface";
import { SelectChangeEvent } from "@mui/material";

export interface SelectItemsInterface {
    value: string;
    label: string;
}

export interface SelectFieldInterface extends DisabledInterface {
    name?: string;
    label?: string;
    value?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items?: SelectItemsInterface[];
}