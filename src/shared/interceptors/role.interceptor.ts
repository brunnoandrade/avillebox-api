import { Injectable, NestInterceptor, ExecutionContext, HttpException, HttpStatus, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Result } from '../../modules/backoffice/models/result.model';

@Injectable()
export class RoleInterceptor implements NestInterceptor {
    constructor(public roles: string[]) {

    }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const payload: JwtPayload = context.switchToHttp().getRequest().user;

        console.log(payload);

        let hasRole = false;
        payload.roles.forEach((role) => {
            if (this.roles.includes(role))
                hasRole = true;
        });

        if (!hasRole) {
            throw new HttpException(new Result('Acesso não autorizado', false, null, null), HttpStatus.FORBIDDEN);
        }

        return next.handle();
    }
}
