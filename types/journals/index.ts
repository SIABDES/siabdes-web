export * from "./journal";
export * from "./response";
export * from "./request";
export * from "./validators";

export enum JournalCategory {
  GENERAL = "GENERAL",
  ADJUSTMENT = "ADJUSTMENT",
}

export type JournalCategoryType = keyof typeof JournalCategory;
