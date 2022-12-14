import React from 'react'

const PcCard = ({mdata}) => {
   
    return (
    <>
    <section className='main-card--cointainer'>
   { mdata.map((curEle)=>{
    const {id,category,name,description,image,price} = curEle;
    return(
        <>
        <div className='card-container ' key={id}>
      <div className='card '>
        <div className='card-body card-shadow'>
            <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle'>{category}</span>
                    <h2 className='card-title'>{name}</h2>
                        <span className='card-description subtle'>{description}</span>
                            <div className='card-read'>View more</div>
                        <img src={image} alt="lenovo legion" className='card-media'/>
                        <span className='card-price subtle'>{price}</span>
                    <span className='card-tag '>Buy</span>

            </div>
        </div>
    </div>
    </>
    )
})
}
</section>
</>
    
  
    
  )
}

export default PcCard;
