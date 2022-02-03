import { ChangeEventHandler } from "react";

export default interface IFormInputProps {
  type: string;
  name: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  label?: string;
}
