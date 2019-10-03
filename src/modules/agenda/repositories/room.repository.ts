import { Injectable } from '@nestjs/common';
import { Room } from '../models/room.model';

@Injectable()
export class RoomRepository {
    async checkAvailability(id: string, date: Date): Promise<Room> {
        console.log('BookRepository:checkAvailability - Recuperando a sala...');
        // TODO: Ler do banco
        return new Room('123456789');
    }

    async book(room: Room) {
        console.log('BookRepository:book - Recuperando a sala...');
        // TODO: Salvar no banco
    }
}
