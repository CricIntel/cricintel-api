import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Player extends Document {
  @Prop({ required: true, unique: true })
  playerId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string; // Batsman, Bowler, All-Rounder

  @Prop({ required: true })
  team: string;

  @Prop({ required: true })
  innings: number;
  
  @Prop({ required: true })
  runs: number;

  @Prop({ required: true })
  highestScore: string;

  @Prop({ required: true })
  ballsFaced: number;

  @Prop({ required: true })
  wickets: number;

  @Prop({ required: true })
  ballsBowled: number;

  @Prop({ required: true })
  bbI: string;

}

export const PlayerSchema = SchemaFactory.createForClass(Player);