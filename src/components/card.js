import React from "react"
import "./card.css"

export default function(props) {
  return <div className={"card-container " + props.classes} style={{backgroundColor:props.color}}>{props.children}</div>
}

export function CardHeader(props) {
  const {
    title,
    subtitle,
    avatar,
    titleClass,
    subTitleClass,
    avatarClass,
    classes,
  } = props
  return (
    <div className={classes}>
      {avatar && <div className={avatarClass}>{avatar}</div>}
      {title && <h4 className={titleClass}>{title}</h4>}{" "}
      {subtitle && <span className={`${subTitleClass} car-subtitle`}>{subtitle}</span>}
    </div>
  )
}

export function CardContent(props) {
  const { classes, children } = props
  return <div className={classes}>{children}</div>
}
