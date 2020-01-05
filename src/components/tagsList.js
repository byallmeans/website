import React from 'react'

export function TagsList({tags}) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}