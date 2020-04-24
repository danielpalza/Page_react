import React from 'react';

export function upStat(stat) {
    console.log(stat);
    return {
        type: 'UPDATE_STATS',
        stat,   
    };
}
export function upArrayAño(stat){
    return {
        type: 'UPDATE_ARRAY_AÑO',
        stat,   
    };
}
export function upArrayMes(stat){
    return {
        type: 'UPDATE_ARRAY_MES',
        stat,   
    };
}
// mapDispatchToProps
export const mapDispatchToProps = dispatch => (
    
    {
    
    update: (stat) => dispatch(upStat(stat)),
    updateArrAño:(data)=> dispatch(upArrayAño(data)),
    updateArrMes:(data)=> dispatch(upArrayMes(data))
    
});

