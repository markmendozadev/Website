import {Language, LibraryType} from 'types/libraries';

export const PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  developer: 'Developer',
  'sdks-and-libraries': 'SDKs and Libraries',
};

export const LIBRARIES: LibraryType[] = [
  {
    description:
      'This library contains all of the core logic, shared functionality, and constants used by both the Bank and Validator on thenewboston network.',
    language: Language.python,
    title: 'thenewboston-python',
    url: 'https://github.com/thenewboston-developers/thenewboston-python',
  },
  {
    description:
      'A JavaScript library for thenewboston that allows you to create new account, create signatures, verify signatures, etc.',
    language: Language.javascript,
    title: 'thenewboston-js',
    url: 'https://github.com/thenewboston-developers/thenewboston-js',
  },
];

export const SDKS: LibraryType[] = [
  {
    description:
      'This is the SDK written in Kotlin for thenewboston with primary focus for Android and Desktop clients.',
    language: Language.kotlin,
    title: 'thenewboston Kotlin-SDK',
    url: 'https://github.com/thenewboston-developers/Kotlin-SDK',
  },
  {
    description:
      'This is a .NET Core SDK for thenewboston, which is available cross-platform. The SDK itself will solely contain the domain and data layers of thenewboston.',
    language: Language.dotNet,
    title: 'thenewboston .NET Core SDK',
    url: 'https://github.com/thenewboston-developers/dotnetcore-sdk',
  },
];
