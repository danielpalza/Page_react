import React from 'react';
import MaterialTabla from 'material-table';

export default function Tabla(props) {
    console.log(props);
    const mes = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
    ];
    const año = 'Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre'.split(
        ' '
    );
    
    const title = 'Valores del ' + props.type.base;
    const tableLoadMes =
        props.props.arrMes === undefined
            ? [{ value: 'vacio' }]
            : props.props.arrMes.map((a, index) => {
                  return { value: a, Mes: mes[index] };
              });
    const tableLoadAño =
        props.props.arrAño === undefined
            ? [{ value: 'vacio' }]
            : props.props.arrAño.map((a, index) => {
                  return { value: a, Año: año[index] };
              });

    const datos= props.type.base==="Año"?tableLoadAño:tableLoadMes;

    console.log(mes);
    console.log(tableLoadMes)
    console.log(tableLoadAño)
    console.log(props.type.unidad)
    return (
        <MaterialTabla
            columns={[
                { title: props.type.unidad, field: props.type.base },
                { title: 'Valor', field: 'value' },
            ]}
            data={datos}
            title={title}
            detailPanel={(rowData) => {
                return <iframe width="40%" heigth="200" />;
            }}
        />
    );
}
