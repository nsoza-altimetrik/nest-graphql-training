import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '../config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
  ],
})
export class ConfigurationModule {}
