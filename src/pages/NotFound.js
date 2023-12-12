import React from 'react'
import Missing from '/Users/learnacademy/Desktop/cat-tinder-frontend/src/assests/missing.jpg'

const NotFound = () => {
return (
<div>
        <img 
        src={Missing} 
        alt='Missing Cat'
        className="missingcat"  />
</div>
)
}

export default NotFound