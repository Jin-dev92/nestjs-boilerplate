import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjs-library/crud';
import { User } from './entities';
import { UsersService } from './users.service';

@Crud({ entity: User })
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public readonly crudService: UsersService) {}
}
