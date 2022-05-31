import { Injectable } from '@nestjs/common';
const tesseract = require("node-tesseract-ocr")
const { PdfReader } = require("pdfreader");

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

let textReturnPdf: string = '';

@Injectable()
export class AppService {

  extractImage = async (file: Express.Multer.File) => {
    console.log(file.path);    
    let textReturn = '';
    await tesseract
      .recognize(file.path, config)
      .then((text) => {
        textReturn = text;
      })
      .catch((error) => {
        console.log(error.message)
      })

    return textReturn;
  }

  readPdf = (file: Express.Multer.File) => {
    return new Promise((resolve, reject) => {
      new PdfReader().parseFileItems(file.path, function (err, item) {
        if (err) {
          reject(err);
        } else if (!item) {
          resolve(textReturnPdf);
        }
        else if (item.text) {
          textReturnPdf += item.text
        };
      });
    });
  }

  extractPdf = async (file) => {
    await this.readPdf(file);
    return textReturnPdf;
  }

}
