// mui & emotion 으로 전체 덮어버리는 법

// import { createTheme } from '@mui/material';

// import { palette } from './palette';
// import { typography } from './typography';

// export const theme = createTheme({
//   typography,
//   palette,
//   spacing: (factor: number) => `${0.4 * factor}rem`,
//   components: {
//     MuiTextField: {
//       defaultProps: {
//         size: 'small',
//         InputProps: {
//           autoComplete: 'off',
//         },
//       },
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         disableRipple: true,
//       },
//       styleOverrides: {
//         root: {
//           fontFamily: 'Noto Sans KR, sans-serif',
//           height: '100%',
//         },
//       },
//     },
//     MuiIconButton: {
//       styleOverrides: {
//         root: {
//           padding: 0,
//         },
//       },
//     },
//     MuiTypography: {
//       defaultProps: {
//         variantMapping: {
//           caption: 'p',
//           body1: 'p',
//           button: 'p',
//           smTitle: 'p',
//           mdTitle: 'p',
//           lgTitle: 'p',
//         },
//       },
//     },
//     MuiButton: {
//       defaultProps: {
//         variant: 'outlined',
//         color: 'default',
//       },
//     },
//     MuiMenu: {
//       defaultProps: {
//         disableScrollLock: true,
//       },
//     },
//     MuiFormControlLabel: {
//       styleOverrides: {
//         root: {
//           margin: 0,
//           '& .MuiFormControlLabel-label': {
//             marginLeft: '0.8rem',
//           },
//         },
//       },
//     },
//     MuiDialog: {
//       defaultProps: {
//         BackdropProps: {
//           sx: {
//             background: 'rgba(0,0,0,0.6)',
//           },
//         },
//         PaperProps: {
//           sx: {
//             width: '43.2rem',
//             minWidth: '43.2rem',
//             borderRadius: '10px',
//           },
//         },
//       },
//     },
//     MuiDialogTitle: {
//       defaultProps: {
//         component: 'div',
//         sx: t => ({
//           borderBottom: `1px solid ${t.palette.background.bgStepColor}`,
//           height: '58px',
//           padding: '1.6rem 2.4rem',
//         }),
//       },
//     },
//     MuiLink: {
//       defaultProps: {
//         underline: 'always',
//       },
//       styleOverrides: {
//         root: {
//           color: '#999999',
//         },
//       },
//     },
//   },
// });
