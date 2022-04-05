import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getImage(filename: string): Buffer {
    const path = `htdocs/private/${filename}`

    if (!fs.existsSync(path)) {
      throw new NotFoundException()
    }

    return fs.readFileSync(path)
  }
}
