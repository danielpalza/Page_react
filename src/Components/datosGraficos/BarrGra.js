import React from 'react';
import MaterialTabla from 'material-table';
import Charts from 'react-apexcharts';

export default function BarrGra(props) {
    console.log(props);
    const state = props.props;
    const año = 'Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre'.split(
        ' '
    );
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
    console.log('mes', mes);
    console.log('arrmes', props.props.arrMes);
    const serie =
        state.arrMes === undefined
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            : props.type === 'mes'
            ? state.arrMes
            : state.arrAño;
    const label = props.type === 'mes' ? mes : año;
    const options = {
        chart: {
            id: "basic-bar",
        },
        series: [
            {
                name: 'valor',
                data: serie,
            },
        ],
        xaxis: {
            categories: label,
        },
    };

    return (
        <div>
            <Charts
                options={options}
                series={options.series}
                type="bar"
                width="500"
            />
        </div>
    );
}
