import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    console.log('DatabaseService has been initialized.');
    const entities = this.dataSource.entityMetadatas.map((e) => e.name);
    console.log('Entities:', entities);
  }

  async onModuleDestroy() {}

  createQueryRunner() {
    return this.dataSource.createQueryRunner();
  }
}
