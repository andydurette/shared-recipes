import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import { login, logout, selectLoginStatus, selectUserId, selectUserName } from '../auth/authSlice';
import { getUserRecipes } from './addRecipeSlice';
import { useDispatch, useSelector } from 'react-redux';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from "./constants";

//Material UI components
import Grid from '@material-ui/core/Grid';
import { Button, Typography, TextareaAutosize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth:'1200px',
      padding:'20px',
      boxSizing: 'border-box',
      margin:'0 auto',
      justifyContent:'center',
      '& .MuiTextField-root': {
        marginTop: '8px',
        marginBottom: '8px',
      },
      '& #instructionField': {
        width:'100%',
        minHeight: '400px',
      },
    },
    styleBox:{
      border:'1px solid black',
      padding: '50px',
      boxSizing: 'border-box',
      margin: '0 auto',
    },
  }));

export default function AddRecipePage() {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUserRecipes());
    // }, [dispatch])

    const classes = useStyles();
    const [value, setValue] = useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const instanceRef = useRef(null)

  async function handleSave() {
    try {
      const savedData = await instanceRef.current.save()
      console.log(savedData);
    }catch(err) {
      console.log(`Error: ${err}`);
    }
    
   }

   let data = { '1': 'test' }

    return  (
        <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={12}>
        <Typography variant='h3'>Add a Recipe</Typography>
            <Typography variant='body2'>Recipe Name</Typography>
            {/* <TextField
            id="standard-multiline-flexible"
            // label="Multiline"
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
            /> */}
        </Grid>
        <Grid container item xs={12} >
        <Grid item xs={2}>
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        </Grid>
        <Grid item xs={10} className={classes.styleBox}>
            {/* <Typography variant='body2'>Instructions</Typography> */}
            {/* <TextareaAutosize id="instructionField" aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" /> */}
            <EditorJs
              
              instanceRef={(instance) => (instanceRef.current = instance)}
              tools={EDITOR_JS_TOOLS}
              data={data}
            />
        </Grid>
       

        </Grid>
        
       
        <Grid item xs={12}>
            <Button  variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </div>
    )
}