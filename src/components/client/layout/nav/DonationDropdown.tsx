import React from 'react'
import { styled, lighten } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { routes } from 'common/routes'
import LinkMenuItem from 'components/common/LinkMenuItem'

import GenericNavMenu from './GenericNavMenu'

const PREFIX = 'DonationMenu'

const classes = {
  dropdownLinkButton: `${PREFIX}-dropdownLinkButton`,
  dropdownLinkText: `${PREFIX}-dropdownLinkText`,
}

const StyledGenericNavMenu = styled(GenericNavMenu)(({ theme }) => ({
  [`& .${classes.dropdownLinkButton}`]: {
    '&:hover': {
      backgroundColor: lighten(theme.palette.primary.main, 0.9),
    },
  },

  [`& .${classes.dropdownLinkText}`]: {
    width: '100%',
  },
}))

type NavItem = {
  href: string
  label: string
  enabled?: boolean
}

const allNavItems: NavItem[] = [
  {
    href: routes.campaigns.index,
    label: 'nav.donations.donate-campaign',
  },
  {
    href: routes.faq_campaigns, //temporarily redirect to FAQ
    label: 'nav.donations.donate-category',
  },
]

export const navItems = allNavItems.filter((el) => typeof el.enabled === 'undefined' ?? el.enabled)

export default function DonationMenu() {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <StyledGenericNavMenu id="donate-dropdown" label={t('nav.donate')}>
      {navItems.map(({ href, label }, key) => (
        <LinkMenuItem
          href={href}
          selected={router.asPath === href}
          key={key}
          className={classes.dropdownLinkButton}>
          <Typography variant="button" className={classes.dropdownLinkText}>
            {t(label)}
          </Typography>
        </LinkMenuItem>
      ))}
    </StyledGenericNavMenu>
  )
}
