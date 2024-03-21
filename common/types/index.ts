export type BackendResponseType<T extends object | string | number = any> = {
  statusCode: number;
  message: string;
  data: T;
};

export type WithPagination<T extends string | number> = {
  next_cursor?: T;
};

export type WithCount = {
  _count: number;
};
