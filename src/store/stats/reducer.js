const iniState={state:{año:"",mes:"", arrAño:[],arrMes:[]}}

export default function Reducer(state = iniState, action) {
    console.log("reducer:",action);
    console.log("reducer:",state)
    if (action.type === 'UPDATE_STATS') {   
        return Object.assign({},state,{
            ...state,
            año: action.stat.año,
            mes: action.stat.mes,
        });
    }
    if (action.type === 'UPDATE_ARRAY_AÑO') {
        return Object.assign({},state,{
             ...state,
            arrAño: action.stat.monthValue,
        });
    }
    if (action.type === 'UPDATE_ARRAY_MES') {
        console.log(action)
        return (Object.assign({},state,{
            ...state,
           arrMes: action.stat.dayValue,
       }));
    }
    return state;
};

// mapStateToProps
export const mapStateToProps = (state) => {
    return {
        state,
    };
};
