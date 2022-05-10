import React, { FC, HTMLAttributes } from "react";
import RenderCnt from "./RenderCnt";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  showRenders?: boolean
}

const Button: FC<Props> = ({ children, onClick, showRenders, title, ...props }) => {
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
    }}>
      {title !== undefined && (title.trim() ? title : <>&nbsp;</>)}
      <button onClick={onClick} {...props}>{children}</button>
      {showRenders && <RenderCnt />}
    </div>
  )
};

export default Button
export const MemoizedButton = React.memo(Button)
