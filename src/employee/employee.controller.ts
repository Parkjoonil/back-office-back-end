import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IEmployeeDTO } from 'src/interface/dtos/employee.dto';
import { EmployeeService } from './employee.service';

@Controller()
@ApiTags('직원')
export class EmployeeController {

    constructor(
        private employeeService: EmployeeService
    ) {

    }
    
    @Get()
    @ApiOperation({
        summary: '직원 정보 조회',
        description: '직원 리스트를 조회합니다.'
    })
    async getEmployees(): Promise<IEmployeeDTO.Response.Employee[]>{
       
        const employees = await this.employeeService.getEmployees();

        return employees
    }

    @Get('sort')
    @ApiOperation({
        summary: '회사내 팀원들 조회',
        description: '회사내 팀원들을 조회합니다.'
    })
    async getSortEmployees(
            @Query('teamname') teamname: string,
            @Query('company') company: string
        ): Promise<IEmployeeDTO.Response.Employee[]>{
            console.log(teamname);
        const employees = await this.employeeService.getSortEmployees(teamname, company);

        return employees
    }

    @Get(':id')
    @ApiOperation({
        summary: '직원 조회',
        description: '직원 1개를 조회합니다.'
    })
    async getEmployee(@Param('id') id: number): Promise<IEmployeeDTO.Response.Employee>{
       
        const employee = await this.employeeService.getEmployee(id);

        return employee
    }

    @Put(':id')
    @ApiOperation({
        summary: '직원 수정',
        description: '직원을 수정합니다.'
    })
    async updateEmployee(
        @Param('id') id: number,
        @Body() body: IEmployeeDTO.Request.CreateEmployee
    ): Promise<IEmployeeDTO.Response.Employee>{
       
        const employee = await this.employeeService.update(id, body);

        return employee
    }

    @Delete(':id')
    @ApiOperation({
        summary: '직원 삭제',
        description: '직원 삭제합니다.'
    })
    async deleteEmployee(
        @Param('id') id: number
    ): Promise<IEmployeeDTO.Response.Employee>{
       
        const employee = await this.employeeService.delete(id);

        return employee
    }


}
