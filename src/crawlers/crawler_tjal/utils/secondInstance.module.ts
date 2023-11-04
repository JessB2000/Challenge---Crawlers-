import { Module } from '@nestjs/common';
import { SecondInstanceAL } from './secondInstance';

@Module({
  providers: [SecondInstanceAL],
  exports: [SecondInstanceAL],
})
export class SecondInstanceALModule {}
