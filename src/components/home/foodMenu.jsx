import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



import Popover from '@material-ui/core/Popover';


const useStyles = makeStyles((theme) => ({
  
  root: {
      width: "calc(100% - 10px)",
    maxWidth: 'auto',
    margin: 20,
    borderRadius: 20,
  },
  media: {
    height: 140,
  },
  price: {
      display: 'flex',
      justifyContent: 'center',
      margin: 10,
      color: '#111',
      fontSize:16,
      fontWeight: 500,
  },
  title: {
      textAlign: 'center',
      fontWeight: 500,
  },
  subTitle: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 400,
  },
  popover: {
      display: 'flex',
      position: 'relative',
        height: "600px",
        width: "340px",
        backgroundColor: "#FAF3C5",
        position: "relative",
    },
    wrapper: {
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: "75%",
        position: "absolute",
        top: "25%",
    },
   
    cartCounter: {
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        margin: 10,
        backgroundColor: '#FF4324',
        color: '#FAF3C5',
        border: '1px solid #FF4324',
        borderRadius: 20,
        padding: 4,
    },
    counter: {
        backgroundColor: '#FF4324',
        color: '#FAF3C5',
        border: 'none',
    },
    popoverTitle: {
        display: 'flex',
        position: 'relative',
        textAlign: 'left',
        fontWeight: 500,
    },
    popoverSubTitle: {
        fontSize: 12,
        textAlign: 'left',
        fontWeight: 400,
    },
    popoverPrice: {
        position: 'absolute',
        left: '240px',
        textAlign: 'right',
        margin: 10,
        color: '#111',
        fontSize:16,
        fontWeight: 500,
  },
  popoverBtn: {
    margin: 10,
    backgroundColor: '#FAF3C5',
    color: '#FF4324',
    fontSize: '20px',
    border: 'none',
    position: 'absolute',
    left: '280px',
    
  },

}));

 const FoodMenu = ({title, image, description, price, subTitle}) => {
   
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

const [count, setCount] = useState(0);
   
      
  let handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  let handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  if(count <= 0 ) {
    handleDecrement = () => setCount(0);
  }
  
  if (count >= 10) {
    handleIncrement = () => setCount(10);
  }
   
  return (

    <div>

    <Card className={classes.root} onClick={handleClick} >
      <CardActionArea>

        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        
        <CardContent>
          <Typography className={classes.title}>
            {title}
          </Typography>
          
          <Typography className={classes.subTitle}>
            {subTitle}
          </Typography>
          
          <Typography className={classes.price}  color="textSecondary" component="p">
                 &#x20a6;{price}
                            
          </Typography>

          </CardContent>
      </CardActionArea>


    </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
      <div  className={classes.popover} >
        <div>
        <button className={classes.popoverBtn}  onClick={handleClose} >x</button>
        </div>
        <Card className={classes.wrapper}>
        
           <CardActionArea>

                    <CardMedia
                      className={classes.media}
                      
                      
                    />       
                    
                    <CardContent>
                    
                    <div className={classes.cartCounter}  >
                    
                      <button className={classes.btn} >
           
                        <button className={classes.counter} onClick={handleIncrement} > + </button>
                        
                        <span style={{padding: 8 }} > {count} </span>
                       
                        <button className={classes.counter} onClick={handleDecrement}> - </button>
                     
                      </button>

                    </div>
                    
                        <Typography className={classes.popoverTitle}>
                            title blah blah blah
                            
                          <span className={classes.popoverPrice}  color="textSecondary" component="p">
                                 &#x20a6;price
                                            
                          </span>

                        </Typography>
                          
                        <Typography className={classes.popoverSubTitle}>
                            subTitle
                        </Typography>
                          
                     
                
                    </CardContent>
        

                </CardActionArea>
        
       
        
        </Card>
        </div>
      </Popover>
    
    </div>
    
  );
}


export default FoodMenu;