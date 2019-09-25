import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://useravill:AWPyDoqe6Si2waSL@avillebox-qgu3x.azure.mongodb.net/test?retryWrites=true&w=majority'),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
