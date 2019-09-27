import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BackofficeModule } from './modules/backoffice/backoffice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://useravill:AWPyDoqe6Si2waSL@avillebox-qgu3x.azure.mongodb.net/test?retryWrites=true&w=majority'),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
