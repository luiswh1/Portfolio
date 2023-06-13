import { IconButton } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
import { useCallback, useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useStyles = makeStyles((theme: any) => createStyles({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: 'pink',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'pink',
            backgroundColor: '#DCDCDC'
        },

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
            <KeyboardArrowUpIcon />
            </IconButton>}
        </div>
  );
};

export default ScrollUpButton;
