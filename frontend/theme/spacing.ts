/**
 * ManoShakti Design System — Spacing & Layout Constants
 */

export const Spacing = {
  // Base spacing scale (4px grid)
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,

  // Screen padding
  screenHorizontal: 20,
  screenVertical: 16,

  // Card internal padding
  cardPadding: 16,
  cardPaddingLg: 20,

  // Section spacing
  sectionGap: 24,
  itemGap: 12,
} as const;

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 999,
  card: 16,
  button: 12,
  input: 12,
  chip: 20,
  avatar: 999,
} as const;

export const Shadows = {
  sm: {
    shadowColor: '#6A63FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  md: {
    shadowColor: '#6A63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#6A63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 5,
  },
  xl: {
    shadowColor: '#1A1A2E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
} as const;

export const Layout = {
  // Button heights
  buttonHeight: 52,
  buttonHeightSm: 40,
  buttonHeightXs: 32,

  // Input heights
  inputHeight: 52,
  inputHeightSm: 44,

  // Icon sizes
  iconSm: 18,
  iconMd: 22,
  iconLg: 28,
  iconXl: 36,

  // Avatar sizes
  avatarSm: 32,
  avatarMd: 44,
  avatarLg: 64,
  avatarXl: 88,

  // Bottom tab bar
  tabBarHeight: 64,

  // Header
  headerHeight: 56,

  // Max content width (for larger screens)
  maxContentWidth: 500,
} as const;
