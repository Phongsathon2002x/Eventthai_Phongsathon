import { Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly authService: AuthService,

  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login') 
  async postLogin(@Request() req) { 
    return this.authService.login(req.user);
  }
}
