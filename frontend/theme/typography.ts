/**
 * ManoShakti Design System — Typography
 */
import { Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const Typography = {
  // Font Families
  fontFamily: {
    regular: fontFamily,
    medium: fontFamily,
    semiBold: fontFamily,
    bold: fontFamily,
  },

  // Font Sizes
  fontSize: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 34,
    '5xl': 42,
  },

  // Font Weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
    extraBold: '800' as const,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1.0,
    widest: 2.0,
  },

  // Pre-built text styles
  styles: {
    hero: {
      fontSize: 34,
      fontWeight: '800' as const,
      lineHeight: 42,
      letterSpacing: -0.5,
    },
    h1: {
      fontSize: 28,
      fontWeight: '700' as const,
      lineHeight: 36,
      letterSpacing: -0.3,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    h4: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 24,
    },
    body: {
      fontSize: 15,
      fontWeight: '400' as const,
      lineHeight: 22,
    },
    bodyMedium: {
      fontSize: 15,
      fontWeight: '500' as const,
      lineHeight: 22,
    },
    bodySm: {
      fontSize: 13,
      fontWeight: '400' as const,
      lineHeight: 18,
    },
    caption: {
      fontSize: 11,
      fontWeight: '400' as const,
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 22,
    },
    buttonSm: {
      fontSize: 14,
      fontWeight: '600' as const,
      lineHeight: 20,
    },
    label: {
      fontSize: 13,
      fontWeight: '500' as const,
      lineHeight: 18,
      letterSpacing: 0.3,
    },
    overline: {
      fontSize: 11,
      fontWeight: '600' as const,
      lineHeight: 16,
      letterSpacing: 1.5,
      textTransform: 'uppercase' as const,
    },
  },
} as const;
