import React,{useEffect,useState} from 'react'
import { useStore } from '../context/GlobalState';
import { BuyProperty } from './BuyProperty'




import { makeStyles, StylesProvider } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';





const useStyles = makeStyles((theme) => ({
    
    textnode: {
        flexGrow: 3,
        maxWidth: 750,
         textAlign:'center',
        margin: 'auto',
        backgroundColor: '#01bf71'

    },
    
}));

export const SaleStatus = ({Id,PropertyId_TokenId,val,responseStatus,OwnerAddress,BuyerAddress,responsetoken}) => {
    const classes = useStyles();
    const [{ contract, accounts }, dispatch] = useStore();
    const [Data, setData] = useState()
    useEffect(() => {
        const getData =()=>{
            NewOwnerOfProperty()
        }
       getData()
    }, [])
    
    const NewOwnerOfProperty = async() =>{
        const newOwner = await contract.methods.ownerOf(PropertyId_TokenId).call().then(function (result, error) {
            if (result) {
               // console.log(JSON.stringify(result),result)
                setData(result)
            } else if (error) {
                console.log(error)
                // setTransactionInProcess(false);
                // setTransactionSuccessful(false)
                // setTransactionError(error.message)
            }
        })
    }
console.log(Data)

   // console.log(PropertyId_TokenId,responseStatus,OwnerAddress,BuyerAddress,typeof(PropertyId_TokenId),typeof(responseStatus),typeof(OwnerAddress),typeof(BuyerAddress))
    return (
      
      <div>
            
      {
          BuyerAddress === Data   ? 
          <Card className={classes.textnode}>
             
                  <List>
                  <Typography>Smart Ownership has been transfer successfully {val} Ethers  from property address </Typography><Box style={{maxWidth:"50"}}> {OwnerAddress} </Box>
  
                  </List>
                  <List>
                  <Typography>to </Typography><Box style={{maxWidth:"50"}}> {Data}</Box>
  
                  </List>
              
  
  
        </Card>
         : <BuyProperty responseStatus={responseStatus} PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} BuyerAddress={BuyerAddress} val={val} />
      }
 </div>

        
    )
}
