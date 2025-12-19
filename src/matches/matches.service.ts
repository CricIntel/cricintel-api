import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from './schemas/match.schema';

@Injectable()
export class MatchesService {
    constructor(
        @InjectModel(Match.name)
        private matchModel: Model<Match>,
      ) {}

      async createMatch(data: Partial<Match>) {
        const match = new this.matchModel(data);
        return match.save();
      }
    
      async getAllMatches() {
        return this.matchModel.find().exec();
      }
}
