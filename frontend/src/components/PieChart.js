import React, {useEffect, useState}  from 'react'
import {Chart as ChartJS , ArcElement,Tooltip,Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'
import axios from 'axios'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
  )

const PieChart = () => {

  const RestURL = "http://localhost:8000/api"
  const [Chart, setChart] = useState();
  
  useEffect(() => {
      const fetchCases = async()=> {
      const res = await axios.get(RestURL)
      console.log(res);
      setChart(res)
          }
    fetchCases();
  }, []);

//getting data from api
  var labelData = Chart?.data.map((x)=>x.classification);
  var getLabels = [...new Set(labelData)];


  //percantage calculate   

var counts = {};
for (var i = 0; i<labelData?.length; i++)
    counts[labelData[i]] = (counts[labelData[i]] + 1) || 1;
    var arr1 = Object.values(counts)
    console.log(arr1);
    
    
var percentage = arr1.map((element)=>{
    return (element/labelData.length)*100
})    

console.log(percentage)
  
  var data = {
    labels : getLabels,
    datasets: [
      {
        label: 'Classification',
        data: 
        percentage,
        // [10,20,30,40,50],
        backgroundColor: [
          '#9FC088',
          '#E8C07D',
          '#CC704B',
          '#614124',
          '#146356',
          '#66806A'
      ],
      hoverOffset: 4   
      },
    ],
  }


  var options = {
    responsive :true,
    maintainAspectRatio : false,
    legend : {
      labels : {
        fontSize : 25 ,
      }
    },
  }
  

  return (
    <Pie
    data = {data}
    height={400}
    options={options}
    />)
}

export default PieChart
