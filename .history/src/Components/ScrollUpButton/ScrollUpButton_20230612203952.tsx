import { IconButton } from "@mui/material";
import { useCallback } from "react";

const ScrollUpButton = ({ showBelow }) => {
    
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
