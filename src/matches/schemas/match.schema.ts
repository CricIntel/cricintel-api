import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Match extends Document {
  @Prop({ required: true })
  matchId: string;

  @Prop({ required: true })
  teamA: string;

  @Prop({ required: true })
  teamB: string;

  @Prop()
  venue: string;

  @Prop()
  matchDate: Date;

  @Prop()
  format: string; // T20, ODI, Test
}

export const MatchSchema = SchemaFactory.createForClass(Match);