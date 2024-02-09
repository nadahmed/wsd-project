import { ApiProperty } from '@nestjs/swagger';

export class FileUploadSchema {
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
  }