import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get(':id')
  findAll(@Param('id') id: string) {
    return `This action return #${id} coffees`;
  }
}
