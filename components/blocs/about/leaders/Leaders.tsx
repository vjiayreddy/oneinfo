'use client'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import NextImage from 'next/image'

const StyledLeadersSection = styled(Box)(({ theme }) => ({
  paddingTop: 50,
  paddingBottom: 30,
  [theme.breakpoints.only('xs')]:{
    paddingTop: 40,
  },

  '& .main-section': {
    backgroundImage: `linear-gradient(144deg, #6D98E9 0%, #D499D9 46%, #E9CFAB 100%)`,
    borderRadius: 20,
    padding: 15,
    '& .section-content': {
      backgroundColor: theme.palette.common.white,
      padding: 20,
      borderRadius: 10,
      minHeight: 110,
      '& .MuiTypography-body2': {
        color: theme.palette.text.secondary,
      },
    },
    '& .image-section': {
      width: '100%',
      height: 250,
      position: 'relative',
      marginBottom: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
  },
}))

interface MentorCardProps {
  image: string
  role: string
  name: string
}

const MentorCard: React.FC<MentorCardProps> = ({ image, role, name }) => {
  return (
    <Grid container direction="column">
      <Grid size={{ xs: 12 }}>
        <Box component="div" className="image-section">
          <NextImage style={{ objectFit: 'cover' }} fill src={image} alt={name} />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box component="div" className="section-content">
          <Typography letterSpacing={1} textAlign="center" fontSize={12} variant="body2">
            {role}
          </Typography>
          <Typography textAlign="center" variant="h6">
            {name}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

const LeadersComponent = () => {
  return (
    <StyledLeadersSection>
      <Container maxWidth="md" component="div" className="main-section">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Box component="div" className="section-content" width="100%">
              <Typography fontSize={12} variant="body2">
                OUR MENTORS
              </Typography>
              <Typography variant="h6">Our distinguished leaders and mentors</Typography>
              <Typography variant="body2">
                Integral to our journey are our distinguished mentors, whose industry experience,
                strategic insight, and academic prowess shape our path forward. Their guidance
                enriches our approach and drives our commitment to excellence.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} container alignItems="stretch">
            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
              <MentorCard image="/images/6.jpeg" role="FOUNDER & CEO" name="Niranjan Vojja" />
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
              <MentorCard
                image="/images/7.jpeg"
                role=" BUSINESS INNVOVATION & STRATEGIC MENTOR"
                name="GS Murthy"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
              <MentorCard
                image="/images/_9.jpeg"
                role="SENIOR TECHNOLOGY STRATEGY MENTOR"
                name="GS Murthy"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledLeadersSection>
  )
}

export default LeadersComponent
