import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action return all coffees, ${limit} & ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffees`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action update ${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes ${id} coffee`;
  }
}
