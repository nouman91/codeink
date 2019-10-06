import React from "react"
import "./tags.css"

const Tag = props => {
  return <small className="tag">{props.label}</small>
}

const Tags = props => {
  const { tags } = props

  return (
    <ul className="tag-list">
      {tags.map(tag => (
        <li>
          <Tag label={tag}></Tag>
        </li>
      ))}
    </ul>
  )
}

export default Tags
