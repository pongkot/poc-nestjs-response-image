import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { Response } from 'express'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('home')
  getHello(): void { }

  @Get('image/:filename')
  getImage(
    @Param('filename')
    filename: string,
    @Res()
    response: Response,
  ): void {
    const buffer = this.appService.getImage(filename)
    response.type('png')
    response.end(buffer, 'binary')
  }
}
