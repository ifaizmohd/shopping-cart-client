import React from "react";

export interface ICustomButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  otherProps?: any;
  mobile?: boolean;
  checkout?: boolean;
  addRemove?: boolean;
}
