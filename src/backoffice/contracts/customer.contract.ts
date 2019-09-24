import { Flunt } from 'src/utils/flunt';
import { Contract } from './contract';
import { Customer } from '../models/customer.model';

export class CreateCustomerContract implements Contract {
    errors: any[];

    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome inválido');
        flunt.isEmail(model.email, 'E-mail inválido');
        flunt.isFixedLen(model.document, 11, 'CPF inválido');
        flunt.hasMinLen(model.password, 6, 'Senha inválida');

        // this.errors.push(); // return this.errors.lenght === 0;

        this.errors = flunt.errors;
        return flunt.isValid();
    }
}