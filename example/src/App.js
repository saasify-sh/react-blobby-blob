import React from 'react'

import { Blob } from 'react-blobby-blob'
import 'react-blobby-blob/dist/index.css'

import styles from './styles.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
    </div>
  )
}

export default App
