import { NotImplementedError } from 'utilities/src/errors'

// Define our own enums
export enum ImpactFeedbackStyle {
  Light = 'light',
  Medium = 'medium',
  Heavy = 'heavy',
}

export enum NotificationFeedbackType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export type HapticFeedbackStyle = ImpactFeedbackStyle | NotificationFeedbackType

export type THapticFeedback = {
  impact: (style?: HapticFeedbackStyle) => Promise<void>
  light: () => Promise<void>
  medium: () => Promise<void>
  heavy: () => Promise<void>
  success: () => Promise<void>
  warning: () => Promise<void>
  error: () => Promise<void>
  selection: () => Promise<void>
}

export const HapticFeedback: THapticFeedback = {
  impact: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  light: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  medium: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  heavy: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  success: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  warning: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  error: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
  selection: async (): Promise<void> => {
    throw new NotImplementedError('Only implemented in `.native.tsx` and `.web.tsx`')
  },
} as const
