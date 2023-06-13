import { IconButton, createStyles, makeStyles } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const useStyles = makeStyles((theme: any) => createStyles({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#3978A6',
            backgroundColor: '#DCDCDC'
        },
        right: '5%'

    }
}))

const ScrollUpButton = (props: { showBelow: number }) => {
  const { showBelow } = props;

  const classes = useStyles()

  const [show, setShow] = useState(showBelow ? true : false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  }, [showBelow, show]);

  const handleClick = useCallback(() => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <div>
        {show &&
         <IconButton onClick={handleClick} className={classes.toTop}>
            teste
            </IconButton>}
        </div>
  );
};

export default ScrollUpButton;
