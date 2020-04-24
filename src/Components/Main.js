import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/stats/reducer';
import { upStat, mapDispatchToProps } from '../store/stats/action';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabla from './datosGraficos/Tabla';
import PieGra from './datosGraficos/PieGra';
import BarrGra from './datosGraficos/BarrGra';

function Content(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
           
        },
    }));

    const classed = useStyles();

    console.log('props', props);
    const state = useRef({});
    useEffect(() => (state.current = props.state.statReducer.stat), []);
    console.log('state.current:', state.current);

    return (
        <MuiThemeProvider>
            <Box className={classed.root}>
                <Box boxShadow={3}  >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <PieGra props={props.state.statReducer} type="año"/>
                        <BarrGra props={props.state.statReducer} type="año" />
                    </Box>

                    <Tabla props={props.state.statReducer} type={{unidad:"Mes", base:"Año"}} />
                </Box>
                <Box  boxShadow={3} >
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <PieGra props={props.state.statReducer} type="mes" />
                        <BarrGra props={props.state.statReducer} type="mes"/>
                    </Box>
                    <Box>
                        <Tabla props={props.state.statReducer} type={{unidad:"Dia", base:"Mes"}} />
                    </Box>
                </Box>
            </Box>
        </MuiThemeProvider>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
