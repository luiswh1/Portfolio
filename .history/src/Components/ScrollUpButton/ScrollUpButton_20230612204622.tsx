import { IconButton } from "@mui/material";
import { useCallback, useState } from "react";

const ScrollUpButton = (props: {showBelow: number}) => {
    const { showBelow } = props

    const [show, setShow] = useState(showBelow ? true : false)

    const handleScroll = useCallback(() => {
        if (window.scrollY > showBelow) {
            if (!show) setShow(true)
        } else {
            if(show) setShow(false)
        }
    }, [])

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