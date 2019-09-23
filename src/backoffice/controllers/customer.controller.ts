import { Controller } from '@nestjs/common';

@Controller()
export class CostumerController {
    get() {
        return 'Obter os clientes';
    }

    post() {
        return 'Criar um cliente';
    }

    put() {
        return 'Atualizar um cliente';
    }

    delete() {
        return 'Remover um cliente';
    }
}