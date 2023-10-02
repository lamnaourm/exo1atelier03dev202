import React from 'react'

export default function UserCard({nom, prenom, email, imageUrl}) {
  return (
    <div className='card'>
        <img src={imageUrl} alt={nom}  />
        <h1>{nom} - {prenom}</h1>
        <h3>{email}</h3>
    </div>
  )
}
