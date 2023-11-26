export type BackendResponseType<T extends object = any> = {
  statusCode: number;
  message: string;
  data: T;
};
