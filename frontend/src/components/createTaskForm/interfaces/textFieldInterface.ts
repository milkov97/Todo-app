import React from "react";
import { DisabledInterface } from "./disabledInterface";

export interface TextFieldInterface extends DisabledInterface {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
