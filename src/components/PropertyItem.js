import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from '../context/GlobalState'
import { property_Detail } from "../store/asyncActions";
import { useParams } from 'react-router-dom'
import Web3 from 'web3'
import { Buyer } from './Buyer';
import { NewOwner } from './NewOwner';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import LocalHotelSharpIcon from '@material-ui/icons/LocalHotelSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import AspectRatioSharpIcon from '@material-ui/icons/AspectRatioSharp';
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import MoneyIcon from '@material-ui/icons/Money';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';



import CardContent from '@material-ui/core/CardContent';
import { PausePresentationRounded } from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
        // width: '0%',
        textAlign:'center',
        margin: 'auto',
       
        maxWidth: 750,
        backgroundColor: theme.palette.background.paper,

    },
    // paperback:{
        
    //     maxWidth: 900,
    //     textAlign: 'center',
    // },
    imageset:{
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(5),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },

        
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


function PropertyItem() {
    const classes = useStyles();

    const { id } = useParams();
    const [{ contract, accounts }, dispatch] = useStore();
    const [events, setEvents] = useState([{}]);

    useEffect(() => {
        async function getData() {
            getProperty()
        }
        getData();
    }, [accounts,contract])

    const getProperty = async () => {
        const response = await property_Detail(contract)
        setEvents(response)
    }

    let returnValues = []
    const alldata = () => {
        if (events) {
            (events).map((item, index) => {
                return returnValues[index] = item.returnValues
            })
            return returnValues
        } else {
            return getProperty()
        }
    }
    returnValues = alldata()
    const val = id - 1;
    let dataItem = []
    dataItem = returnValues[val]
      console.log(dataItem)
    //console.log(typeof(events),events)
    const data = () => {

        if (dataItem) {
            for (var a in dataItem) {
                try {

                    const useraddress = dataItem[0]
                    const tokenId = dataItem[1]
                    const address = dataItem[2]
                    return <div>
                    <Card  className={classes.root} variant="outlined">
                <CardContent>
                  <Typography gutterBottom>
                 <Paper>
                       <img width="740px" src={`https://ipfs.infura.io/ipfs/${dataItem[8]}`} className="imageset" />
                       </Paper>
                  </Typography>
                  {/* list of item */}
                  <List >
                    <ListItem>
                      <ListItemIcon>
                      <ImportContactsSharpIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Address" />
                  {address} 
                    </ListItem>
 
                    </List>
                    {/* divide the list */}
                     <Divider />
                      
                  
                  <Typography>
                  <List >
                    <ListItem>
                       
                     <ListItemIcon>
                    <RoomSharpIcon/>
                     </ListItemIcon>
                     <ListItemText primary="City" />
                      {dataItem[3]} 
                      </ListItem>
 
                       </List>
                       <Divider />
                  </Typography>
                  <List >
                   <ListItem>
                     <ListItemIcon>
                       <LocalHotelSharpIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Rooms" />
                      <item>  {dataItem[4]}</item>
                     </ListItem>
 
                     </List>
                      <Divider />
                        
                  <Typography>
                  <List >
                   <ListItem>
                     <ListItemIcon>
                       <AspectRatioSharpIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Area" />
                  <item> {dataItem[5]}</item>
                     </ListItem>
 
                      </List>
                      <Divider />
                      
                   
                  </Typography>
                  <Typography>
                  <List >
                  <ListItem>
                     <ListItemIcon>
                      <HomeWorkSharpIcon/>
                    </ListItemIcon>
                     <ListItemText primary="Property type" />
                     <item> {dataItem[6]}</item>
                      </ListItem>
 
                       </List>
                       <Divider />
                  </Typography>
                  <Typography>
                  <List >
                    <ListItem>
                      <ListItemIcon>
                       <MoneyIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Price" />
                     <item> {Web3.utils.fromWei(dataItem[7].toString(), 'Ether')}</item>
                     </ListItem>
 
                      </List>
                      <Divider />
                   
                  </Typography>
                  <List >
                    <ListItem>
                      <ListItemIcon>
                       <AccountCircleSharpIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Registrar" />
                      <b>{useraddress}</b> 
                     </ListItem>
 
                      </List>
                      <Divider />
                   
                  <Typography>

                  </Typography>
                </CardContent>
               
              </Card> 

{dataItem[0] === accounts[0] ? <NewOwner PropertyId_TokenId={dataItem[1]} /> : <Buyer PropertyId_TokenId={dataItem[1]} OwnerAddress={dataItem[0]} />}
           
               </div>
                    
                    // <div> <div keys={id}>
                    //     <br />

                    //     <h3><b>Owner Address:</b> {useraddress}</h3>
                    //     <br />
                    //     <img src={`https://ipfs.infura.io/ipfs/${dataItem[8]}`} width="680px" />
                    //     <h3>Token Id: {tokenId}</h3>
                    //     <h3>Property Address: {address}</h3>
                    //     <h3>City: {dataItem[3]}</h3>
                    //     <h3>Rooms: {dataItem[4]}</h3>
                    //     <h3>Area: {dataItem[5]}</h3>
                    //     <h3>Property Type: {dataItem[6]}</h3>
                    //     <h3>Price: {Web3.utils.fromWei(dataItem[7].toString(), 'Ether')} Eth</h3>

                    // </div>
                    //     {dataItem[0] === accounts[0] ? <NewOwner PropertyId_TokenId={dataItem[1]} /> : <Buyer PropertyId_TokenId={dataItem[1]} OwnerAddress={dataItem[0]} />}
                    //     {/* <OfferStatus PropertyId_TokenId={dataItem[1]} /> */}
                    // </div>
                } catch (error) {
                    console.log(error);
                }
            }
        }
        else {
            return <div>
                <h3>Loading</h3>
                <h5>Warning: You are trying to direct access to properties or Refreshing the page is not allowed!</h5>
            </div>
        }
    }


    return (
        <>
            {data()}
        </>
    )
}

export default PropertyItem;