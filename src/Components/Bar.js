import React, { useState } from 'react';
import { connect } from 'react-redux';
import Load from './Load';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { mapDispatchToProps } from '../store/stats/action';
import { mapStateToProps } from '../store/stats/reducer';

function Bar(props) {
    console.log("Bar props:",props)
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '20ch',
            },
        },
        button: {
            margin: theme.spacing(2),
            background: 'rgb(0,188,212)',
            height: '5vh',
            '&:hover': {
                backgroundColor: 'rgb(0,188,230)',
            },
        },
        tool: {
            background: 'rgb(0,188,212)',
            margin: theme.spacing(-1),
        },
        text: {
            margin: theme.spacing(1),
        },
    }));

    const classed = useStyles();

    const [state, setState] = useState({
        mes: null,
        año: null,
        arr: null,
    });
    console.log('props', props);
    function toRedux(state) {
        console.log('props', props);
        props.update(state);
        Load(state, props);
    }

    return (
        <nav>
            <MuiThemeProvider>
                <Toolbar className={classed.tool}>
                    <TextField
                        className={classed.text}
                        id="filled-basic"
                        variant="filled"
                        label="Mes"
                        onChange={(e) =>
                            setState({ ...state, mes: e.target.value })
                        }
                        margin="normal"
                    />
                    <TextField
                        className={classed.text}
                        id="filled-basic"
                        variant="filled"
                        label="Año"
                        onChange={(e) =>
                            setState({ ...state, año: e.target.value })
                        }
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classed.button}
                        endIcon={<Icon>send</Icon>}
                        onClick={() => toRedux(state)}
                    >
                        Enviar
                    </Button>
                </Toolbar>
            </MuiThemeProvider>
        </nav>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
