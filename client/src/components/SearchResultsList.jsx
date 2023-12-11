import React from "react"
import { Link } from 'react-router-dom'

export const SearchResultsList = ({ results }) => {

  return (
    <div className="results-list">
      {results.map((result, id) => {
        let content
        if (result.houseName) {
          content = (
            <Link key={id} to={`/houses/${result._id}`}>
              <div>{result.houseName}</div>
            </Link>
          )
        } else if (result.firstName && result.lastName) {
          content = (
            <Link key={id} to={`/characters/${result._id}`}>
              <div>{`${result.firstName} ${result.lastName}`}</div>
            </Link>
          )
        } else if (result.name) {
          content = (
            <Link key={id} to={`/places/${result._id}`}>
              <div>{result.name}</div>
            </Link>
          )
        }

        return <React.Fragment key={id}>{content}</React.Fragment>
      })}
    </div>
  )
}