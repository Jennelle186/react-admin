import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({   
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textAlign: 'left'
    },
    AppBar: {
        flex: 1,
        textAlign: 'center'
    },
    spacer: {
        flex: 2,
    },
});


const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography  
                variant="h6"
                color="inherit"
                textAlign="center"
                className={classes.title}s
                id="react-admin-title" 
                >
               AJC
            </Typography>
          
        </AppBar>
    );
};



export default MyAppBar;