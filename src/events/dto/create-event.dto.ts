export class CreateEventDto {
    date: string;
    name: string;
    description: string;
    isHoliday: boolean = false;
}
