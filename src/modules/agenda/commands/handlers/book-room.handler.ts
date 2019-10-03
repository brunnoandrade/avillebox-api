import { BookRoomCommand } from '../book-room.command';
import { EventPublisher, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RoomRepository } from '../../repositories/room.repository';
import { HttpException, HttpStatus } from '@nestjs/common';

@CommandHandler(BookRoomCommand)
export class BookRoomHandler implements ICommandHandler<BookRoomCommand> {
    constructor(
        private readonly repository: RoomRepository,
        private readonly publisher: EventPublisher,
    ) { }

    async execute(command: BookRoomCommand) {
        console.log('BookRoomHandler:execute - Executando o comando...');

        const room = this.publisher.mergeObjectContext(
            await this.repository.checkAvailability(command.roomId, command.date),
        );

        if (room) {
            room.book(command.customerId, command.date);
            room.commit();
            return await this.repository.book(room);
        }

        throw new HttpException('Sala não disponível', HttpStatus.BAD_REQUEST);
    }
}
