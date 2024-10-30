import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserAuth } from './user-auth.entity';
import { UserPointHistory } from './user-point-history.entity';

@Entity()
export class User {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamptz', default: null, nullable: true })
  delete_at: Date;

  @OneToOne(() => UserAuth, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  userAuth: UserAuth;

  @OneToMany(
    () => UserPointHistory,
    (userPointHistory) => userPointHistory.user,
    {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  histories: UserPointHistory[];
}
