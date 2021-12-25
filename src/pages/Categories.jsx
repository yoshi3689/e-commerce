import React from 'react'

import { CategoryList } from '../components/index'
import useStyles from '../components/Products/styles'

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <CategoryList />
      </main>
    </>
  );
}

export default Categories;