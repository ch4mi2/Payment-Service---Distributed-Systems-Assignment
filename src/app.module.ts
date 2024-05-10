import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/paymnets.module';


@Module({
  imports: [ ConfigModule.forRoot(), PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
