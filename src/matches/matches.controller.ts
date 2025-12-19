import { Body, Controller, Get, Post } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Match } from './schemas/match.schema';

@Controller('matches')
export class MatchesController {
    constructor(private matchesService: MatchesService) {}
    @Get()
    getAllMatches() {
        return this.matchesService.getAllMatches();
    }
  
    @Post()
    createMatch(@Body() body: any) {
        return this.matchesService.createMatch(body);
    }
}
