import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { Repository } from 'typeorm';

import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { Invoice } from './entities/invoice.entity';

const invoiceTable: Invoice[] = [];

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice) private invoiceRepository: Repository<Invoice>,
  ) {}

  create(createInvoiceInput: CreateInvoiceInput) {
    const newInvoice = this.invoiceRepository.create(createInvoiceInput);

    return this.invoiceRepository.save(newInvoice);
  }

  async findAll() {
    return await this.invoiceRepository.find();
  }

  async findOne(id: number) {
    const invoice = await this.invoiceRepository.findOne(id);
    if (!invoice) {
      throw new NotFoundException(`ivoice id #${id} not found.`);
    }
    return invoice;
  }

  async update(id: number, updateInvoiceInput: UpdateInvoiceInput) {
    const invoice = await this.invoiceRepository.findOne(id);

    delete updateInvoiceInput.id;
    this.invoiceRepository.merge(invoice, updateInvoiceInput);
    return this.invoiceRepository.save(invoice);
  }

  remove(id: number) {
    return this.invoiceRepository.delete(id);
  }
}
