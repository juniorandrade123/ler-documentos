/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTextImage(file: Express.Multer.File): Promise<string>;
    getTextPdf(file: Express.Multer.File): Promise<string>;
}
