import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Brightness = ({labelForSiesteTabOnly, toggled: toggled, info}:{labelForSiesteTabOnly:string|null, toggled:boolean|null, info:any}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);

        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '55%'],
                    startAngle: 196,
                    label: {
                        show: false,
                        formatter(params:any) {
                            return params.name === 'hidden' ? '' : params.name + ' (' + params.value + '%)';
                        },
                    },
                    data: [
                        { value: info?.value, name: 'Brightness', itemStyle: {color:'lightblue'} },
                        { value: 100 -info?.value, name: 'Darkness', itemStyle: {color:'orange'}},
                        {
                            value: 70,
                            name:'brightness',
                            itemStyle: {
                                color: 'none',
                                decal: {
                                    symbol: 'none'
                                }
                            },
                            label: {
                                show: false
                            }
                        }
                    ]
                }
            ],
            graphic: [
                {
                    type: 'text',
                    left: 'center',
                    top: '85%',
                    style: {
                        text: 'okok',
                        textAlign: 'center',
                        fill: toggled ? 'grey' : 'grey',
                    },
                },
                {
                    type: 'text',
                    left: 'center',
                    top: '70%',
                    style: {
                        text: Number(info?.value)+' '+info?.unit,
                        textAlign: 'center',
                        fill: toggled ? 'grey' : 'grey',
                        font: 'bolder 1.5em sans-serif'
                    },
                },
            ],
        };




        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div><span className={`absolute ${toggled ? " text-gray-500 " : "text-gray-500"}`}>{labelForSiesteTabOnly}</span><div ref={chartRef} className="h-64"></div></div>;

};
