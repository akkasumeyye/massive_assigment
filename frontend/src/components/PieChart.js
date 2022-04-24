import {Chart as ChartJS , ArcElement,Tooltip,Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'
import axios from 'axios'
import { useGlobalContext } from '../components/fetchDataContext';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
  )

const PieChart = () => {

  const {data} = useGlobalContext();


   //getting classification data from api
  
  var labelData = data?.map((x)=>x.classification);
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
  
  var datam = {
    labels : getLabels,
    datasets: [
      {
        label: 'Classification',
        data: 
        percentage,
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
    aspectRatio	:2,
    legend : {
      labels : {
        fontSize : 25 ,
      }
    },
  }
  

  return (
    <Pie
    data = {datam}
    height={400}
    options={options}
    />)
}

export default PieChart
