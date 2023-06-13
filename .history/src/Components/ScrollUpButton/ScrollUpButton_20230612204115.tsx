import { IconButton } from "@mui/material";
import { useCallback, useState } from "react";

const ScrollUpButton = ({ showBelow }) => {
    
    const [show, setShow] = useState(showBelow ? true : false)

  const handleClick = useCallback(() => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <IconButton onClick={handleClick}>teste</IconButton>
    </div>
  );
};

export default ScrollUpButton;
