import React, { FC } from "react";
import RenderCnt from "./RenderCnt";

interface Props {
  onClick: () => void
  showRenders?: boolean
  children: React.ReactNode
}

const Button: FC<Props> = ({ children, onClick, showRenders }) => {
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      border: '1px solid black'
    }}>
      <button onClick={onClick}>{children}</button>
      {showRenders && <RenderCnt />}
    </div>
  )
};

export default Button;
