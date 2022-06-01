/// <reference types="express-serve-static-core" />
/// <reference types="multer" />
export declare class AppService {
    extractImage: (file: Express.Multer.File) => Promise<string>;
    readPdf: (file: Express.Multer.File) => Promise<unknown>;
    extractPdf: (file: any) => Promise<string>;
}
