import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom';
import {Box, Button, TextField, InputLabel, CircularProgress} from '@material-ui/core';

export const Form = ({submitTxt, formGroups, handleSubmit, setFormValues, isLoading, formErr, links, isComplete}) => {
  return (
    <form className={`form-container`} onSubmit={(e) => handleSubmit(e)}>
      {formGroups.map((group, i) => {
        return(
          <Box m={1} className='form-group'>
            <InputLabel className='form-label'>{group.label}</InputLabel>
            <TextField variant="outlined" size="small" id={group.id} type={group.type} onKeyUp={(e) => setFormValues(e)}/>
          </Box>
        )
      })}
        { submitTxt &&
          <Box m={2.369} display="flex" justifyContent="center">
          { !isLoading && !isComplete && <Button variant="contained" align="center" className='btn-theme' type='submit'>{submitTxt}</Button> }
          { isLoading && <CircularProgress className="centered" /> }
          </Box>
        }
        { links && links.map((link, i) => {
          return (
            <Link className='form-link turquoise-font' to={link.url}>{link.txt}</Link>
          )
        })
        }
        {<InputLabel className='error-label form-link'>{formErr}</InputLabel>}
      </form>
  )
}

export default Form
