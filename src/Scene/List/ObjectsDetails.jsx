import React from 'react'
import './ObecjtsDetails.css'

const ObjectsDetails = ({chairBoss, activeChairBossIndex, objecdetails}) => {
  return (
    
    <div className="object-details">
        <h2>{chairBoss[activeChairBossIndex].name}</h2>
        <img src={chairBoss[activeChairBossIndex].img} alt="Description" />
        <p>Description : {chairBoss[activeChairBossIndex].description}</p>
        <p>Price : {chairBoss[activeChairBossIndex].price} $</p>
    </div>
  )
}
export default ObjectsDetails


