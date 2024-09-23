// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Function to handle icon sizes based on the button size
const iconStyles = (size?: string) => ({
  '& > *:nth-of-type(1)': {
    ...(size === 'small'
      ? {
          fontSize: '14px'
        }
      : size === 'medium'
        ? {
            fontSize: '16px'
          }
        : {
            fontSize: '20px'
          })
  }
})

const button: Theme['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant === 'text'
          ? {
              ...(ownerState.size === 'small' && {
                padding: theme.spacing(2, 2.5)
              }),
              ...(ownerState.size === 'medium' && {
                padding: theme.spacing(2, 3.5)
              }),
              ...(ownerState.size === 'large' && {
                padding: theme.spacing(2, 4.5)
              })
            }
          : ownerState.variant === 'outlined'
            ? {
                ...(ownerState.size === 'small' && {
                  padding: theme.spacing(1.75, 3.25)
                }),
                ...(ownerState.size === 'medium' && {
                  padding: theme.spacing(1.75, 4.25),
                }),
                ...(ownerState.size === 'large' && {
                  padding: theme.spacing(1.75, 5.25)
                })
              }
            : {
                ...(ownerState.size === 'small' && {
                  padding: theme.spacing(2, 3.5)
                }),
                ...(ownerState.size === 'medium' && {
                  padding: theme.spacing(2, 4.5),

                }),
                ...(ownerState.size === 'large' && {
                  padding: theme.spacing(2, 5.5)
                })
              })
      }),
      contained: ({ ownerState }) => ({
        boxShadow: 'var(--mui-customShadows-xs)',
        ...(!ownerState.disabled && {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: 'var(--mui-customShadows-xs)'
          },
          '&:active': {
            boxShadow: 'none'
          }
        })
      }),
      sizeSmall: ({ theme }) => ({
        lineHeight: 1.38462,
        fontSize: theme.typography.body2.fontSize,
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
      }),
      sizeMedium: {
        borderRadius: 'var(--mui-shape-customBorderRadius-rounded)',
          minWidth: '88px',
          height: '40px',
      },
      sizeLarge: {
        fontSize: '1.0625rem',
        lineHeight: 1.529412,
        borderRadius: 'var(--mui-shape-customBorderRadius-rounded)',
        width: '145px',
        height: '40px',
      },
      startIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineEnd: theme.spacing(1.5)
            }
          : ownerState.size === 'medium'
            ? {
                marginInlineEnd: theme.spacing(2)
              }
            : {
                marginInlineEnd: theme.spacing(2.5)
              }),
        ...iconStyles(ownerState.size)
      }),
      endIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineStart: theme.spacing(1.5)
            }
          : ownerState.size === 'medium'
            ? {
                marginInlineStart: theme.spacing(2)
              }
            : {
                marginInlineStart: theme.spacing(2.5)
              }),
        ...iconStyles(ownerState.size)
      })
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          color: 'var(--mui-palette-customColors-primaryColor)',
          borderColor: 'var(--mui-palette-customColors-primaryColor)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-main)',
            borderColor: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          color: 'var(--mui-palette-customColors-black)',
          backgroundColor: 'transparent',
          borderColor: 'var(--mui-palette-customColors-grayOutline)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))':
            {
              backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
            },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-main)',
            borderColor: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          color: 'var(--mui-palette-customColors-textDefault)',
          backgroundColor: 'var(--mui-palette-customColors-primaryColor)',
          '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
            backgroundColor: 'var(--mui-palette-primary-dark)'
          },
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-contrastText)',
            backgroundColor: 'var(--mui-palette-primary-main)'
          }
        }
      }
    ]
  }
}

export default button
