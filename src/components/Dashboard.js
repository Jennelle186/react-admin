import * as React from "react";
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import { Resource } from 'react-admin';
import OrderList from './Orders';

import {Link} from 'react-router-dom'; 

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },

  });


export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card >
        <Grid container spacing={4}>
        <Grid item xs ={12} sm={4}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <PeopleIcon/>  Total Users
                </Typography>
                <Typography variant="h5" component="h2">
                    150
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">View All</Button>
               {/*<Link to="/Orders" className="btn btn-primary">Orders</Link>*/}
                </CardActions>      
            </Card>
      </Grid>
        
      <Grid item xs ={12} sm={4}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <ShoppingCartIcon/> Pending Orders
                </Typography>
                <Typography variant="h5" component="h2">
                    4
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">View All</Button>
                </CardActions>      
            </Card>
      </Grid>
      <Grid item xs ={12} sm={4}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <LocalShippingIcon/>  Deliveries
                </Typography>
                <Typography variant="h5" component="h2" >
                    2
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">View All</Button>
                </CardActions>      
            </Card>
      </Grid>
      </Grid>
        <br></br>
      <Typography variant="h6" component="h6" gutterBottom>
        Today's Orders
      </Typography>
      <Resource name="order" list={OrderList} icon={ShoppingCartIcon}/>
      </Card>
    );
 
  }
