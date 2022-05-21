import {HttpException, HttpStatus, Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {env} from "../configs";
import { NextFunction, Request, Response } from 'express';
import {verify} from "jsonwebtoken";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization as string | undefined;
    if (authorization === undefined || authorization === '') {
      throw new UnauthorizedException('Missing token')
    }

    const [_bearer, token] = (authorization as string).split(' ');



    if (token === undefined) {
      throw new UnauthorizedException('Missing token')
    }

    try {
      verify(token, env.JWT_SECRET);
      next()
    } catch {
      throw new UnauthorizedException('Bad token')
    }

  }
}
