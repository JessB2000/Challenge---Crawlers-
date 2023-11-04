import { Module } from '@nestjs/common';
import { SecondInstanceCE } from './secondInstance';

@Module({
  providers: [SecondInstanceCE],
  exports: [SecondInstanceCE],
})
export class SecondInstanceCEModule {}
