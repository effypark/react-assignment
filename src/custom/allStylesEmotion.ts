// mui & emotion 으로 스타일 전체 덮어버릴 때 사용

// import '@mui/material/styles';
// import '@mui/material/Typography';
// import '@mui/material/Button';
// import '@mui/material/ToggleButton';
// import '@mui/material/TextField';

// // Type Augumentation of default Material UI theme
// declare module '@mui/material/styles' {
//   interface TypographyVariants {
//     lgTitle: React.CSSProperties;
//     mdTitle: React.CSSProperties;
//     smTitle: React.CSSProperties;
//     tableBody1: React.CSSProperties;
//     tableBody2: React.CSSProperties;
//   }
//   interface TypographyVariantsOptions {
//     lgTitle?: React.CSSProperties;
//     mdTitle?: React.CSSProperties;
//     smTitle?: React.CSSProperties;
//     tableBody1?: React.CSSProperties;
//     tableBody2?: React.CSSProperties;
//   }
//   interface Palette {
//     border: Palette['primary'];
//     default: Palette['primary'];
//     textHighlighted: Palette['primary'];
//   }
//   interface PaletteOptions {
//     border?: PaletteOptions['primary'];
//     default?: PaletteOptions['primary'];
//     textHighlighted?: PaletteOptions['primary'];
//   }
//   interface TypeBackground {
//     bgColor: string;
//     bgLineColor: string;
//     bgDisabledColor: string;
//     bgStepColor: string;
//     modal: string;
//   }
//   interface TypeText {
//     headline: string;
//     subHeadline: string;
//     body: string;
//   }
// }

// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     lgTitle: true;
//     mdTitle: true;
//     smTitle: true;
//     tableBody1: true;
//     tableBody2: true;
//     h1: false;
//     h2: false;
//     h3: false;
//     h4: false;
//     h5: false;
//     h6: false;
//     body2: false;
//     overline: false;
//     subtitle1: false;
//     subtitle2: false;
//   }
// }

// declare module '@mui/material/TextField' {
//   interface TextFieldPropsSizeOverrides {
//     large: true;
//   }
// }

// declare module '@mui/material/Button' {
//   interface ButtonPropsSizeOverrides {
//     xlg: true;
//   }
//   interface ButtonPropsColorOverrides {
//     default: true;
//     textHighlighted: true;
//   }
//   interface ButtonClasses {
//     sizeXlg: string;
//     containedDefault: string;
//     outlinedDefault: string;
//     textDefault: string;
//     containedTextHighlighted: string;
//     outlinedTextHighlighted: string;
//     textTextHighlighted: string;
//   }
// }

// declare module '@mui/material/ToggleButton' {
//   interface ToggleButtonPropsSizeOverrides {
//     xlg: true;
//   }
//   interface ToggleButtonClasses {
//     sizeXlg: string;
//   }
// }

// ** declare global - 전역에서 타입 선언 **

// declare global {
//   interface Spacable {
//     // Padding
//     paddingAll?: string;
//     paddingHorizontal?: string;
//     paddingVertical?: string;
//     paddingLeft?: string;
//     paddingRight?: string;
//     paddingTop?: string;
//     paddingBottom?: string;ㄴ
//     marginAll?: string;
//     marginHorizontal?: string;
//     marginVertical?: string;
//     marginLeft?: string;
//     marginRight?: string;
//     marginTop?: string;
//     marginBottom?: string;

//     backgroundColor?: string;
//     borderRadius?: string;

//     clickable?: boolean;
//   }

//   type FontSize =
//     | 'inherit'
//     | 'small'
//     | 'body1'
//     | 'body2'
//     | 'title'
//     | 'title2'
//     | 'topNavTitle'
//     | 'h1'
//     | 'h2'
//     | 'h3'
//     | 'h4'
//     | 'h5'
//     | 'largest';
// }
// export {};
