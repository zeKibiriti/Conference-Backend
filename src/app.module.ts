import {MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RegistrationForm} from "./entities/RegistrationForm";
import { RegistrationModule } from './registration/registration.module';
import {CorsMiddleware} from "./middleware/cors.middleware";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "conference",
    entities: [RegistrationForm],
    synchronize: true,
  }), RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply the CORS middleware to all routes
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
