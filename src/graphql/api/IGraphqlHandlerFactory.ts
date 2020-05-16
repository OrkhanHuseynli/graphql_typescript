import * as graphqlHTTP from "express-graphql";
import { IncomingMessage, ServerResponse } from 'http';


type Request = IncomingMessage;
type Response = ServerResponse;

export type MiddleWare = (
    request: Request,
    response: Response,
) => Promise<undefined>

export interface IGraphqlHandlerFactory {
    getHandler():MiddleWare
}