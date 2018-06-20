// eslint-disable-next-line
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const template = (
  <React.Fragment>
    <CssBaseline />
    <Typography variant='display4' gutterBottom>
      Display 4
    </Typography>
    <Typography variant='display3' gutterBottom>
      Display 3
    </Typography>
    <Typography variant='display2' gutterBottom>
      Display 2
    </Typography>
    <Typography variant='display1' gutterBottom>
      Display 1
    </Typography>
    <Typography variant='headline' gutterBottom>
      Headline
    </Typography>
    <Typography variant='title' gutterBottom>
      Title
    </Typography>
    <Typography variant='subheading' gutterBottom>
      Subheading
    </Typography>
    <Typography variant='body2' gutterBottom>
      Body 2
    </Typography>
    <Typography variant='body1' gutterBottom align='right'>
      Body 1
    </Typography>
    <Typography variant='caption' gutterBottom align='center'>
      Caption
    </Typography>
    <Button variant='contained' color='primary'>
      Hello World
    </Button>
  </React.Fragment>
);
// eslint-disable-next-line
ReactDOM.render(template, document.getElementById('app'));
