/**
 * ManoShakti Design System — Colors
 * Soft, calm, professional palette for a youth mental wellness app
 */

export const Colors = {
  // Primary — Soft Indigo / Deep Lavender
  primary: '#6C63FF',
  primaryLight: '#8B85FF',
  primaryDark: '#5A52E0',
  primarySoft: '#EDE9FF',
  primarySurface: '#F5F3FF',

  // Secondary — Soft Blue
  secondary: '#4EA8DE',
  secondaryLight: '#7BC0EA',
  secondarySoft: '#E8F4FD',

  // Supporting — Sage Green
  accent: '#7CB69D',
  accentLight: '#A3D4BE',
  accentSoft: '#EBF5F0',

  // Background
  background: '#F8F7FC',
  surface: '#FFFFFF',
  surfaceSecondary: '#F3F2F8',
  surfaceTertiary: '#EEEDFA',

  // Text
  textPrimary: '#1A1A2E',
  textSecondary: '#5A5A7A',
  textTertiary: '#8E8EA0',
  textInverse: '#FFFFFF',
  textLink: '#6C63FF',

  // Mood Colors
  moodHappy: '#FFD93D',
  moodGood: '#6BCB77',
  moodOkay: '#4EA8DE',
  moodLow: '#FF8C42',
  moodVeryLow: '#E85D75',

  // Status
  success: '#4CAF7D',
  successSoft: '#E8F5EE',
  warning: '#F5A623',
  warningSoft: '#FFF3E0',
  error: '#E85D75',
  errorSoft: '#FDE8EC',
  info: '#4EA8DE',
  infoSoft: '#E8F4FD',

  // Borders
  border: '#E8E7F0',
  borderLight: '#F0EFF5',
  borderFocus: '#6C63FF',

  // Shadows
  shadow: 'rgba(106, 99, 255, 0.08)',
  shadowDark: 'rgba(26, 26, 46, 0.12)',

  // Overlay
  overlay: 'rgba(26, 26, 46, 0.5)',
  overlayLight: 'rgba(26, 26, 46, 0.2)',

  // Chat
  chatUser: '#6C63FF',
  chatBot: '#F3F2F8',
  chatBotText: '#1A1A2E',

  // Misc
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  disabled: '#C4C4D4',
  placeholder: '#B0B0C0',
} as const;

export type ColorKey = keyof typeof Colors;
