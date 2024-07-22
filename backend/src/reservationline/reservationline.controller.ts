import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReservationlineService } from './reservationline.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

export class CreateReservationLineDto {
  date: string;
  reservationId: string;
  busTimeId: string;
}

@UseGuards(JwtAuthGuard)
@Controller('reservationline')
export class ReservationlineController {
  constructor(private readonly reservationlineService: ReservationlineService) {}
}
