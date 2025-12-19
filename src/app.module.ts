import { Module } from '@nestjs/common';
import { MatchesModule } from './matches/matches.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [MatchesModule,
    MongooseModule.forRoot(
      'mongodb+srv://cricintel_user:cricintel_password@cricintelcluster.pz2zlat.mongodb.net/cricintel'
    ),
    PlayerModule,
  ]
})
export class AppModule {}
