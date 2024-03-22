export * from './journal';
export * from './response';
export * from './request';
export * from './validators';

export enum JournalCategory {
  GENERAL = 'GENERAL',
  ADJUSTMENT = 'ADJUSTMENT',
}

export enum RetrievalCategory {
  ALL = 'ALL',
  INCOME_STATEMENT = 'INCOME_STATEMENT',
  FINANCIAL_STATE = 'FINANCIAL_STATE',
  CALK = 'CALK',
}

export type JournalCategoryType = keyof typeof JournalCategory;
