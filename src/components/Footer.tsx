import React from "react"

export default function Footer({ remaining, total }) {
  return (
    <p>
      {remaining} / {total} left
    </p>
  )
}


