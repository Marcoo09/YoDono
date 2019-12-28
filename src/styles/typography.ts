import {TextStyle} from 'react-native';
import {Palette} from './Color';
import {Font} from './Font';
import {Theme} from './Theme';

export enum Typography {
  ULTRA = 'ULTRA',
  TITLE = 'TITLE',
  SUBHEADER2 = 'SUBHEADER2',
  SUBHEADER = 'SUBHEADER',
  HEADER = 'HEADER',
  HEADER_BOLD = 'HEADER_BOLD',
  HEADER2 = 'HEADER2',
  HEADER2_BOLD = 'HEADER2_BOLD',
  BUTTON2 = 'BUTTON2',
  BUTTON = 'BUTTON',
  BUTTON_SMALL = 'BUTTON_SMALL',
  BODY = 'BODY',
  BODY_BOLD = 'BODY_BOLD',
  CAPTION_BOLD = 'CAPTION_BOLD',
  CAPTION = 'CAPTION',
  CAPTION_BOLD_MEDIUM = 'CAPTION_BOLD_MEDIUM',
  CAPTION_BIGGER = 'CAPTION_BIGGER',
  SMALL = 'SMALL',
  SMALL2 = 'SMALL2',
  DEMI_BOLD = 'DEMI_BOLD',
  ULTRA_BEBAS_NEUE_REGULAR = 'ULTRA_BEBAS_NEUE_REGULAR',
}

const typographies = {
  [Typography.BODY]: {
    fontFamily: Font.Regular,
    fontSize: 16,
  },
  [Typography.ULTRA_BEBAS_NEUE_REGULAR]: {
    fontFamily: Font.BevasNeueRegular,
    fontSize: 36,
  },
  [Typography.DEMI_BOLD]: {
    fontFamily: Font.DemiBold,
    fontSize: 15,
  },
  [Typography.BODY_BOLD]: {
    fontFamily: Font.Bold,
    fontSize: 16,
  },
  [Typography.BUTTON]: {
    fontFamily: Font.Medium,
    fontSize: 15,
  },
  [Typography.BUTTON2]: {
    fontFamily: Font.Bold,
    fontSize: 14,
  },
  [Typography.CAPTION]: {
    fontFamily: Font.Regular,
    fontSize: 14,
  },
  [Typography.BUTTON_SMALL]: {
    fontFamily: Font.Medium,
    fontSize: 13,
  },
  [Typography.CAPTION_BIGGER]: {
    fontFamily: Font.Regular,
    fontSize: 16,
  },
  [Typography.CAPTION_BOLD]: {
    fontFamily: Font.Bold,
    fontSize: 14,
  },
  [Typography.CAPTION_BOLD_MEDIUM]: {
    fontFamily: Font.Bold,
    fontSize: 15,
  },
  [Typography.SMALL]: {
    fontFamily: Font.Regular,
    fontSize: 12,
  },
  [Typography.SMALL2]: {
    fontFamily: Font.Bold,
    fontSize: 12,
  },
  [Typography.SUBHEADER]: {
    fontFamily: Font.Regular,
    fontSize: 18,
  },
  [Typography.SUBHEADER2]: {
    fontFamily: Font.Bold,
    fontSize: 18,
  },
  [Typography.TITLE]: {
    fontFamily: Font.Bold,
    fontSize: 24,
  },
  [Typography.ULTRA]: {
    fontFamily: Font.Bold,
    fontSize: 48,
  },
  [Typography.HEADER]: {
    fontFamily: Font.Regular,
    fontSize: 21,
  },
  [Typography.HEADER_BOLD]: {
    fontFamily: Font.Bold,
    fontSize: 21,
  },
  [Typography.HEADER2]: {
    fontFamily: Font.Regular,
    fontSize: 25,
  },
  [Typography.HEADER2_BOLD]: {
    fontFamily: Font.Bold,
    fontSize: 25,
  },
};

export const getTypographyWithColor = (
  ThemeSelected: Theme,
  typography: Typography,
): TextStyle => ({
  ...typographies[typography],
  color: getColorFromTheme[ThemeSelected],
});

interface ThemeStyle<T> {
  [Theme.BLACK]: T;
  [Theme.GRAY]: T;
  [Theme.GRAY2]: T;
  [Theme.PRIMARY]: T;
  [Theme.ACCENT]: T;
  [Theme.WHITE]: T;
  [Theme.WHITE2]: T;
  [Theme.VOMITGREEN]: T;
  [Theme.WHITE_TRANSPARENT]: T;
  [Theme.LIGHT_PINK]: T;
  [Theme.RED]: T;
  [Theme.GREEN]: T;
  [Theme.YELLOW]: T;
}

export const getColorFromTheme: ThemeStyle<string> = {
  [Theme.BLACK]: Palette.Dark80,
  [Theme.GRAY]: Palette.GrayTheme,
  [Theme.GRAY2]: Palette.Gray2Theme,
  [Theme.PRIMARY]: Palette.Primary,
  [Theme.ACCENT]: Palette.Accent,
  [Theme.WHITE]: Palette.White,
  [Theme.WHITE2]: Palette.White2,
  [Theme.VOMITGREEN]: Palette.VomitGreen,
  [Theme.WHITE_TRANSPARENT]: Palette.WhiteTransparent,
  [Theme.WHITE_TRANSPARENT]: Palette.WhiteTransparent,
  [Theme.LIGHT_PINK]: Palette.VeryLightPinkSeven,
  [Theme.RED]: Palette.Red,
  [Theme.GREEN]: Palette.Green,
  [Theme.YELLOW]: Palette.Yellow,
};
