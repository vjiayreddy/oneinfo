'use client'
import { Box, styled, useTheme, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FooterComponent from '../footer'
import DesktopAppBar from './DesktopAppBar'
import MobileNavigation from './MobileNavigation'

const StyledDefaultLayout = styled(Box)(({ theme }) => ({
  minHeight: '100dvh',
  '& .navigation-bar': {
    minWidth: 450,
    backgroundColor: theme.palette.common.white,
    height: 50,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      minWidth: 0,
    },
  },
  '& a': {
    fontSize: 14,
    color: theme.palette.grey[600],
    '&:hover': {
      color: theme.palette.grey[800],
    },
  },
}))

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const scrollThreshold = 100
  const navRef = React.createRef<HTMLDivElement | null>()
  const theme = useTheme()
  const isXsDevice = useMediaQuery(theme.breakpoints.only('xs'))

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (typeof lastScrollY === 'undefined') {
        setLastScrollY(currentScrollY)
        return
      }

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsVisible(false)
      } else if (currentScrollY <= scrollThreshold) {
        setIsVisible(true)
      }

      // Remember the current scroll position for the next move
      setLastScrollY(currentScrollY)
    }
    setLastScrollY(window.scrollY)
    window.addEventListener('scroll', controlNavbar, { passive: true })
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <StyledDefaultLayout>
      {!isXsDevice && <>{isVisible && <DesktopAppBar navRef={navRef} />}</>}
      {isXsDevice && <MobileNavigation />}

      <Box mb={5}>{children}</Box>
      <FooterComponent />
    </StyledDefaultLayout>
  )
}

export default DefaultLayout
