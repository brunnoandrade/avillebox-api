import { Controller, Get, Post, Body, UseGuards, Req, HttpException, HttpStatus } from '@nestjs/common';
import { RoomBookService } from './services/room-book.service';
import { JwtAuthGuard } from '../../shared/guards/auth.guard';
import { BookRoomCommand } from './commands/book-room.command';
import { Result } from '../backoffice/models/result.model';
import { BookRoomDto } from './dtos/book-room.dto';

@Controller('v1/rooms')
export class AgendaController {
    constructor(private readonly service: RoomBookService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async Book(@Req() request, @Body() model: BookRoomDto) {
        try {
            console.log('AppController:Book - Iniciando a requisição');
            const command = new BookRoomCommand(request.user.document, model.roomId, model.date);
            await this.service.Book(command);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível reservar sua sala', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

}
