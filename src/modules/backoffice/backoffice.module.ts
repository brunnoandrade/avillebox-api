import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { CustomerSchema } from './schemas/customer.schema';
import { UserSchema } from './schemas/user.schema';

import { AuthService } from '../../shared/services/auth.service';
import { AccountService } from './services/account.service';
import { CustomerService } from './services/customer.service';
import { AddressService } from './services/address.service';
import { PetService } from './services/pet.service';
import { JwtStrategy } from '../../shared/strategies/jwt.strategy';

import { AccountController } from './controllers/account.controller';
import { CustomerController } from './controllers/customer.controller';
import { AddressController } from './controllers/address.controller';
import { PetController } from './controllers/pet.controller';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: '#~Tp:}K7EFxkE;w#ZUNO-F#b<bmqXJM&7O}P9wakI-^N(ihHE*Ra{!XDk!*6)9-x4F.{?*9:<uduyJE)>20',
            signOptions: {
                expiresIn: 3600
            }
        }),
        MongooseModule.forFeature([
            {
                name: 'Customer',
                schema: CustomerSchema,
            },
            {
                name: 'User',
                schema: UserSchema,
            },
        ]),
    ],
    controllers: [
        AccountController,
        AddressController,
        CustomerController,
        PetController,
    ],
    providers: [
        AuthService,
        JwtStrategy,
        AccountService,
        AddressService,
        CustomerService,
        PetService,
    ],
})
export class BackofficeModule { }
