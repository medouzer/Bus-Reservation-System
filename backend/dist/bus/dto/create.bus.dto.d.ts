export declare class createBusDto {
    busName: string;
    busNumber: string;
    busStatus?: boolean;
}
export declare class addStationToBusDto {
    busId: string;
    stationIds: string[];
}
export declare class updateBusDto extends createBusDto {
}
