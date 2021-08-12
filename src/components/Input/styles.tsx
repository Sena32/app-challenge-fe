import { TextField, withStyles } from "@material-ui/core";
import { theme } from "../../styles/global";

export const Input = withStyles({
    root: {
      '& label.Mui-focused': {
        color: theme.palette.black,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.black,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'blue',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
        '& + .MuiInputAdornment-root': {
            color: 'red'
        }
      },
    },
    

  })(TextField);