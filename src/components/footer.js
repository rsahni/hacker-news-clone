import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

const Footer = (props) => {
    const {data} = props;
    const [xStateData , setXStateData] = useState([]);
    const [yStateData , setYStateData] = useState([]);

    useEffect(()=>{
        const xData = [];
        const yData = [];
        
        data.forEach((post, index)=>{
            xData.push(post.objectID);
            yData.push(post.points);
        });
        setXStateData(xData);
        setYStateData(yData);
    }, [data]);

    const state = {
        labels: xStateData,
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: yStateData
          }
        ]
    };

    return (<React.Fragment>
            <footer className="footer-section">
                <div className="orange-separator"></div>
                <div className="chart-section">
                    <Line
                        data={state}
                        options={{
                            responsive: true,
                            scales: {
                                xAxes: [ {
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'ID',
                                        fontSize: 16,
                                        fontStyle: "bold"
                                    },
                                    ticks: {
                                        autoSkip: false,
                                        maxRotation: 90,
                                        minRotation: 90
                                    }
                                } ],
                                yAxes: [ {
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Votes',
                                        fontSize: 16,
                                        fontStyle: "bold"
                                    }
                                } ],
                                pointLabels :{
                                    fontStyle: "bold",
                                }
                            },
                            legend:{
                                display:false,
                                position:'right'
                            }
                        }}
                    />
                </div>
            </footer>
        </React.Fragment>);
};

export default Footer;