import React from 'react'

function PersonCard({ person }) {
    return (
        <div>
            <div>{person.id} : {person.firstName} {person.lastName}</div>
        </div>
    )
}

export default PersonCard
