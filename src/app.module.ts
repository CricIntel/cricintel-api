import { Module } from '@nestjs/common';
import { MatchesModule } from './matches/matches.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MatchesModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cricintelcluster.pz2zlat.mongodb.net/cricintel`
    ),
    PlayerModule,
  ]
})
export class AppModule {}
