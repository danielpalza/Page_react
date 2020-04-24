import React from 'react';

export default async function Load(state,props) {
    console.log('props load:', props);
    console.log('props state:', state);
    const stateRedux= props.state.statReducer.stat;
    console.log("stateRedux",stateRedux)
    
    const base = 'http://localhost:8000';
    const url = [
        '/random/by-month/' + state.año,
        '/random/by-day/' + state.mes,
    ];
    console.log('load urls:', url);

    let ret = [];

    var myInit = {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    //Configuracion de request para año
    var myRequest = new Request(base + url[0], myInit);
    // arrregla fetch

    const envioAño = await fetch(myRequest)
        .then((res) => res.json())
        .then((data) => props.updateArrAño(data))
        .catch((e) =>
            console.log({ Status: 'ERROR_PEDIDO', message: e.message })
        );

    //Configuracion de request para mes
    
    var myRequest = new Request(base + url[1], myInit);
    
    const envioMes = await fetch(myRequest)
        .then((res) => res.json())
        .then((data) => props.updateArrMes(data))
        .catch((e) =>
            console.log({ Status: 'ERROR_PEDIDO', message: e.message })
        );
}
