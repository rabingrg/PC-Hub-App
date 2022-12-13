import React from 'react'

const NavButton = ({filterIt,uniqData}) => {
  return (
    <>
     <nav className='navbar'>
      <div className='btn-group'>

      {uniqData.map((curEleme)=>{
        return(<>
            <button className='btn-group__item' onClick={()=>{
          filterIt(curEleme)}
          }>{curEleme}</button>

        </>)
      })}
      </div>
    </nav>
    </>
  )
}

export default NavButton;
