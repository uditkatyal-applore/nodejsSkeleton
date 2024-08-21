import { EntryPointHandler } from "../Base.controller";

export interface IRouter {
  (): IRouter;
  get(path: string, ...handlers: EntryPointHandler[]): IRouter;
  post(path: string, ...handlers: EntryPointHandler[]): IRouter;
  put(path: string, ...handlers: EntryPointHandler[]): IRouter;
  delete(path: string, ...handlers: EntryPointHandler[]): IRouter;
  patch(path: string, ...handlers: EntryPointHandler[]): IRouter;
}
