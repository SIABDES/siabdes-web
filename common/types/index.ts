export type BackendResponseType<T extends object | string | number = any> = {
  statusCode: number;
  message: string;
  data: T;
};
