// mui 컴포넌트 커스터마이징

// import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

// export const Button = styled(
//   ({ variant = 'outlined', color = 'primary', ...others }: ButtonProps) => {
//     return <MuiButton variant={variant} color={color} {...others} />;
//   },
// )(({ theme }) => {
//   return {
//     '&:hover': {
//       boxShadow: 'none',
//     },
//     // 버튼 기본 스타일링
//     '&.MuiButton-root': {
//       whiteSpace: 'nowrap',
//       overflowX: 'hidden',
//       textOverflow: 'ellipsis',
//       boxShadow: 'none',
//     },
//     // 버튼 색상 스타일링
//     '&.MuiButton-text': {
//       color: '#111111',
//       textDecoration: 'underline',
//       backgroundColor: 'transparent',
//       '&:hover': {
//         textDecoration: 'underline',
//         backgroundColor: 'transparent',
//       },
//     },
//     '&.MuiButton-outlined.Mui-disabled': {
//       color: theme.palette.text.disabled,
//       borderColor: theme.palette.background.bgDisabledColor,
//     },
//     '&.MuiButton-contained.Mui-disabled': {
//       color: theme.palette.text.disabled,
//       backgroundColor: theme.palette.background.bgDisabledColor,
//     },
//     '&.MuiButton-text.Mui-disabled': {
//       color: theme.palette.text.disabled,
//     },
//     '&.MuiButton-containedDefault': {},
//     '&.MuiButton-outlinedDefault': {
//       borderColor: theme.palette.default.main,
//       color: theme.palette.text.body,
//     },
//     '&.MuiButton-textDefault': {},
//     '&.MuiButton-containedTextHighlighted': {
//       color: theme.palette.primary.main,
//     },
//     '&.MuiButton-outlinedTextHighlighted': {
//       borderColor: theme.palette.default.main,
//       color: theme.palette.primary.main,
//       fontWeight: 500,
//     },
//     '&.MuiButton-textTextHighlighted': {
//       color: theme.palette.primary.main,
//     },
//     // 버튼 사이즈 스타일링
//     '&.MuiButton-sizeSmall': {
//       height: '3.2rem',
//       fontSize: '1.3rem',

//       padding: `0 1.2rem`,
//     },
//     '&.MuiButton-sizeMedium': {
//       height: '4rem',
//       fontSize: '1.4rem',
//       padding: `0 1.6rem`,
//     },
//     '&.MuiButton-sizeLarge': {
//       height: '4.8rem',
//       fontSize: '1.5rem',
//       padding: `0 2rem`,
//       fontWeight: 500,
//     },

//     '&.MuiButton-sizeXlg': {
//       height: '5.6rem',
//       fontSize: '1.6rem',
//       padding: `0 2rem`,
//       fontWeight: 500,
//     },
//     // Icons
//     '& span.MuiButton-startIcon': {
//       marginRight: '0.4rem',
//       marginLeft: 0,
//     },
//     '& span.MuiButton-endIcon': {
//       marginLeft: '0.4rem',
//       marginRight: 0,
//     },
//   };
// });
