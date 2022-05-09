import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Invoice } from './entities/invoice.entity';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  providers: [InvoiceResolver, InvoiceService],
})
export class InvoiceModule {}
