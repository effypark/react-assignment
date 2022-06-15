// mui 컴포넌트 커스터마이징
// 전역에서 베이스로 가져와서 사용

// import {
//     Box,
//     InputAdornment,
//     styled,
//     TextField as MuiTextField,
//     TextFieldProps as MuiTextFieldProps,
//     Typography,
//   } from '@mui/material';
//   import React from 'react';

//   import { ErrorMessage } from '../ErrorMessage';

//   function Suffix({ children }: { children?: React.ReactNode }) {
//     return (
//       <InputAdornment
//         position="end"
//         disableTypography
//         sx={(theme) => ({
//           height: '100%',
//           minHeight: '100%',
//           borderLeft: `1px solid ${theme.palette.border.light}`,
//           marginLeft: 0,
//           marginRight: -4,
//           px: 2,
//         })}
//       >
//         <Typography color="text.subHeadline">{children}</Typography>
//       </InputAdornment>
//     );
//   }

//   type StyledTextFieldProps = {
//     suffix?: string;
//   } & MuiTextFieldProps;

//   const StyledTextField = styled(({ suffix, ...props }: StyledTextFieldProps) => (
//     <MuiTextField
//       {...props}
//       InputProps={{
//         endAdornment: suffix ? (
//           <Suffix>{suffix}</Suffix>
//         ) : (
//           props.InputProps?.endAdornment
//         ),
//         autoComplete: 'off',
//         ...props.InputProps,
//       }}
//     />
//   ))(({ theme, size }) => ({
//     '& .MuiInputBase-root': {
//       height:
//         size === 'small'
//           ? '3.2rem'
//           : size === 'medium'
//           ? '4rem'
//           : size === 'large'
//           ? '4.8rem'
//           : '3.2rem',
//       borderRadius: '5px',
//       backgroundColor: theme.palette.common.white,
//       fieldset: {
//         borderColor: theme.palette.border.light,
//       },
//       '&.Mui-focused': {
//         fieldset: {
//           borderWidth: '1px !important',
//         },
//       },
//       '& .MuiInputBase-input': {
//         height: '100%',
//         padding: theme.spacing(0, 4),
//         fontSize: '1.3rem',
//         '&::placeholder': {
//           color: theme.palette.border.light,
//           opacity: 1,
//         },
//       },
//       '&.Mui-disabled': {
//         fieldset: {
//           borderColor: theme.palette.border.light,
//         },
//         '& .MuiInputBase-input:disabled': {
//           backgroundColor: theme.palette.background.bgDisabledColor,
//           borderRadius: '5px',
//         },
//       },
//     },
//     '& .MuiFormHelperText-root': {
//       whiteSpace: 'pre-wrap',
//       margin: `${theme.spacing(2)} 0 0 0`,
//     },
//     '&:hover': {
//       fieldset: {
//         borderColor: `${theme.palette.primary.main} !important`,
//       },
//     },
//     '& .MuiInputBase-adornedEnd': {
//       paddingRight: theme.spacing(4),
//     },
//   }));

//   export type TextFieldProps = { errorMessage?: string } & StyledTextFieldProps;

//   export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
//     ({ errorMessage, sx, ...props }, ref) => {
//       return (
//         <Box style={{ position: 'relative' }} sx={sx}>
//           <StyledTextField
//             error={!!errorMessage}
//             placeholder="입력"
//             sx={{ width: '100%' }}
//             {...props}
//             ref={ref}
//           />
//           {errorMessage && (
//             <div
//               style={{
//                 position: 'absolute',
//                 left: 0,
//                 bottom: props.helperText ? '-1.3rem' : '-3.3rem',
//                 zIndex: 3,
//               }}
//             >
//               <ErrorMessage>{errorMessage}</ErrorMessage>
//             </div>
//           )}
//         </Box>
//       );
//     },
//   );
