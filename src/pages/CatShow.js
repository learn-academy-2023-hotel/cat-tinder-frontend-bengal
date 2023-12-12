import React from 'react'
import { useParams } from 'react-router-dom'

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
        </>
    )}
</div>
)
}

export default CatShow