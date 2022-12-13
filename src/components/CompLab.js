import React, { useState } from 'react';
import AllPCs from './PcApi';
import PcCard from './PcCard';
import NavButton from './NavButton';

const uniqueCatg = [...new Set(AllPCs.map((curElement)=>{
  return curElement.category;
})),"All"];


const CompLab = () => {
  const [pcData,setPCData] = useState(AllPCs);
  const [uniqData,setUniqData] = useState(uniqueCatg);
  
  const filterItem=(category)=>{
    if(category==="All"){
      return setPCData(AllPCs);
      
    }
    const updateItem = AllPCs.filter((curElem)=>{
      return curElem.category===category;
    })
    setPCData(updateItem);
  }
  return (
  <>
    <NavButton filterIt={filterItem} uniqData={uniqData} />
    <PcCard mdata={pcData}/>
  </>
  )
}

export default CompLab;
