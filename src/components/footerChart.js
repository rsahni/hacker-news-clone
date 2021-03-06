import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

const FooterChart = (props) => {
    const {data, postHideData, postVotes} = props;
    const [xStateData , setXStateData] = useState([]);
    const [yStateData , setYStateData] = useState([]);

    useEffect(()=>{
        setPointsDataForGraph();
    }, [data]);

    useEffect(()=>{
        setPointsDataForGraph();
    }, [postHideData]);

    useEffect(()=>{
        setPointsDataForGraph();
    }, [postVotes]);

    const setPointsDataForGraph = ()=>{
        const xData = [];
        const yData = [];
        
        data.forEach((post, index)=>{
            if(postHideData.indexOf(post.objectID) === -1){
                let tempYData = postVotes[post.objectID] ? postVotes[post.objectID] : post.points;
                xData.push(post.objectID);
                yData.push(tempYData);
            }
        });
        setXStateData(xData);
        setYStateData(yData);
    };

    const state = {
        labels: xStateData,
        datasets: [
          {
            label: 'Votes',
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
        </React.Fragment>);
};

export default FooterChart;