import { Module } from '@nestjs/common';
import { SecondInstance } from './secondInstance';

@Module({
  providers: [SecondInstance],
  exports: [SecondInstance],
})
export class SecondInstanceModule {}
