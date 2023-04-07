import { Module } from '@nestjs/common';
import { HttpGateway } from './httpGateway/httpGateway';
import { FrameworkModule } from 'src/framework/framework.module';

@Module({
  imports: [FrameworkModule],
  exports: [HttpGateway],
  providers: [HttpGateway],
})
export class GatewayModule {}
