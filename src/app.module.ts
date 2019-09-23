import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [BackofficeModule],
  controllers: [],
  providers: [],
}) //decorator - agrega dados as classes
export class AppModule {}
