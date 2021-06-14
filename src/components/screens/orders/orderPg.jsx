import React,{useState} from'react';

import './index.css';

import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
        height: "100%",
        width: "100%",
        backgroundColor: "#FAF3C5",
        position: "relative",
    },
    root: {
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: "80%",
        position: "absolute",
        top: "20%",
    },
    media: {
        height: 140,
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
    title: {
        display: 'flex',
        position: 'relative',
        textAlign: 'left',
        fontWeight: 500,
    },
    subTitle: {
        fontSize: 12,
        textAlign: 'left',
        fontWeight: 400,
    },
    price: {
        position: 'absolute',
        left: '260px',
        textAlign: 'right',
        margin: 10,
        color: '#111',
        fontSize:16,
        fontWeight: 500,
  },
  
  

}));


const OrderPg = () => {
  
  const classes = useStyles();
  
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
    
    return(
        
        <div className={classes.container} >
        
            <Card className={classes.root} >
            
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
                    
                        <Typography className={classes.title}>
                            title blah blah blah
                            
                          <span className={classes.price}  color="textSecondary" component="p">
                                 &#x20a6;price
                                            
                          </span>

                        </Typography>
                          
                        <Typography className={classes.subTitle}>
                            subTitle
                        </Typography>
                          
                     
                
                    </CardContent>
        

                </CardActionArea>

            
            </Card>
        
        </div>
        
        )
    
}

export default OrderPg;