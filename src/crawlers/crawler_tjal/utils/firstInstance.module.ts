import { Module } from '@nestjs/common';
import { FirstInstanceAL } from './firstInstance';

@Module({
  providers: [FirstInstanceAL],
  exports: [FirstInstanceAL],
})
export class FirstInstanceALModule {}
