import axios from 'axios'
import React, {useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'

const Table = () => {
  const [data, setData] = useState([]);
  const RestURL = "http://localhost:8000/api"

  useEffect(() => {
    getData();
  }, []);

  const getData = ()=> {
    axios(RestURL).then((res)=> {
      console.log(res.data);
      setData(res.data)
    })
  };

  const columns = [
    {
      dataField : "variant",
      text : "Variant",
      sort : true,
      filter : textFilter(),
    },
    {
      dataField : "gene",
      text : "Gene",
      sort : true,
      filter : textFilter(),
    },
    {
      dataField : "classification",
      text : "Classification",
      sort : true,
      filter : textFilter(),
    },
    {
      dataField : "frequency",
      text : "Frequency",
      sort : true,
      filter : textFilter(),
    }
  ]

  return (
    <div>
      <BootstrapTable 
      keyField='id' 
      data={data} 
      columns={columns}
      striped
      hover
      condensed
      pagination={paginationFactory()}
      filter={filterFactory()}
      />
    </div>
  )
}

export default Table