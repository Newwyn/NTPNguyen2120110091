import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox';
import brandApi from '../../api/brandApi';

function SelectBrand(props) {
    const defaultValue = props.defaultValue
    const [data, setData] = useState([])
      const handleFunction = props.handleFunction

    useEffect(()=>{
           const fetchBrands = async  () =>{
             const response = await brandApi.getAll();
           setData(response.map((brand)=>{
                return{
                    label: brand.brand_name,
                    value:brand.id
                }
             })) 
             console.log();
           }
           fetchBrands()
    },[])
  return (
    <SelectBox  name="brand_id" data={data} defaultValue={defaultValue} handleFunction={handleFunction} />
  )
}

export default SelectBrand
