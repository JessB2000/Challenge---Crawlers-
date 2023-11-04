import { Module } from '@nestjs/common';
import { FirstInstanceCE } from './fistInstance';

@Module({
  providers: [FirstInstanceCE],
  exports: [FirstInstanceCE],
})
export class FirstInstanceCEModule {}
