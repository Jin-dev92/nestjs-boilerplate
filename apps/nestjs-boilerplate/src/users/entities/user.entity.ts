import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserAuth } from './user-auth.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'varchar', length: 8, nullable: true, default: null })
  birth: string;

  @Column({ type: 'int', default: 0 })
  point: number;

  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  ip: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  useragent: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true, default: null })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true, default: null })
  delete_at: Date;

  @OneToOne(() => UserAuth, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  userAuth: UserAuth;
}
