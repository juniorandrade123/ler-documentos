import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('ler-imagem')
  @UseInterceptors(FileInterceptor('file'))
  getTextImage(@UploadedFile() file: Express.Multer.File) {    
    return this.appService.extractImage(file);    
  }

  @Post('ler-pdf')
  @UseInterceptors(FileInterceptor('file'))
  getTextPdf(@UploadedFile() file: Express.Multer.File) {
    return this.appService.extractPdf(file);    
  }
}
