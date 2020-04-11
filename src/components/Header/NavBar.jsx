import React from "react"
import { Link } from "gatsby"

import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link to="/recipes" className={styles.pageLink}>
        Recipes
      </Link>
      <Link to="/gallery" className={styles.pageLink}>
        Gallery
      </Link>
      <Link to="/events" className={styles.pageLink}>
        Events
      </Link>
    </div>
  )
}
