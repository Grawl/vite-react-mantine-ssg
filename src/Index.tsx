import { useState } from 'react'
import { Button, MantineProvider, Title } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

import styles from './Index.module.css'

export default function Index() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider defaultColorScheme='auto'>
      <div className={styles.root}>
        <Title>Vite + SSG + React + Mantine</Title>
        <Button onClick={() => setCount(count => count + 1)}>
          <IconChevronRight />
          count is {count}
        </Button>
      </div>
    </MantineProvider>
  )
}
