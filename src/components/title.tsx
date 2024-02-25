import React, { type ReactElement } from "react";

type TitleProps = { children: string | ReactElement };

const Title = ({ children }: TitleProps) => {
  return <div>{children}</div>;
};

export default Title;
