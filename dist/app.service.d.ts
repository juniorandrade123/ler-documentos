export declare class AppService {
    extractImage: (file: Express.Multer.File) => Promise<string>;
    readPdf: (file: Express.Multer.File) => Promise<unknown>;
    extractPdf: (file: any) => Promise<string>;
}
