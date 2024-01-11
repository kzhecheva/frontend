import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'next-i18next'

import DonationDropdown from './DonationDropdown'
import DonationMenu from './DonationMenu'
import ProjectMenu from './ProjectMenu'

export default function MainNavMenu({ children }: { children?: React.ReactNode }) {
  const { t } = useTranslation()

  return (
    <Grid container direction="row" wrap="nowrap" alignItems="baseline" spacing={4}>
      <Grid item>
        <DonationDropdown />
      </Grid>
      <Grid item>
        <DonationMenu />
      </Grid>
      <Grid item>
        <ProjectMenu />
      </Grid>
      {/* <Grid item>
        <DevelopmentMenu />
      </Grid> */}
      {children}
    </Grid>
  )
}
