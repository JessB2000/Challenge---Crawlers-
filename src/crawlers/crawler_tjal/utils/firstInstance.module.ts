import { Module } from '@nestjs/common';
import { FirstInstance } from './firstInstance';

@Module({
  providers: [FirstInstance],
  exports: [FirstInstance],
})
export class FirstInstanceModule {}
