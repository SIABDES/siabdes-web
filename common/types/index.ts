export type BackendResponseType<
  T extends string | number | string[] | number[] | Record<string, any>
> = {
  statusCode?: number;
  message?: string;
  data: T;
};

export type WithPagination<T extends string | number> = {
  next_cursor?: T;
};

export type WithCount = {
  _count: number;
};
