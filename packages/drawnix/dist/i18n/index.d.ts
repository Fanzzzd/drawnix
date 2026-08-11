import { default as React } from 'react';
import { Language, Translations, I18nContextType, I18nProviderProps } from './types';
export declare const setBoardLanguage: (board: object, language: Language) => void;
export declare const I18nProvider: React.FC<I18nProviderProps>;
export declare const useI18n: () => I18nContextType;
export declare const i18nInsidePlaitHook: (board?: object | null) => {
    t: (key: keyof Translations) => string;
    readonly language: Language;
};
export type { Language, Translations, I18nContextType };
