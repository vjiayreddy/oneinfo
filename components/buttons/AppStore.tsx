import React from 'react'
import { Button } from '@mui/material'
import NextImage from 'next/image'

const AppStoreButton = () => {
  return (
    <Button
      startIcon={<NextImage alt="apple-icon" width={20} height={20} src="/icons/apple.svg" />}
      sx={(theme) => ({
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      })}
      variant="contained"
      color="inherit"
      size="large"
      onClick={() => {
        window.open('https://apps.apple.com/in/app/oneinfo-ai/id6517354494', '_blank')
      }}
    >
      App Store
    </Button>
  )
}

export default AppStoreButton
