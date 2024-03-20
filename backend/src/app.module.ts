import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { User } from './user/entites/user.entity';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';
import { Verification } from './user/entites/verification';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { Restaurants } from './restaurants/entity/restaurants.entity';
import { Category } from './restaurants/entity/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 앱 전역에서 ConfigModule 사용
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [User, Verification, Restaurants, Category],
        synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
      })
    }),
    UserModule,
    CommonModule,
    AuthModule,
    JwtModule,
    RestaurantsModule,
  ],
  controllers: [],
  providers: [
  ],
})

// logger middelware 설정
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}