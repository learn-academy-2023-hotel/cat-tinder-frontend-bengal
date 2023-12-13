import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)
return (
<div>
    {currentCat && (
        <>
            <img
            alt={`profile of a cat  named ${currentCat.name}`}
            src={currentCat.image}
            />
            {currentCat.enjoy}
            {currentCat.age}

        <NavLink to={`/catedit/${currentCat.id}`} className="nav-link"> Edit Purrrfile</NavLink>
        </>
    )}
</div>
)
}

export default CatShow