import { Body } from '../body/schemas/body.schema';
import { FuelTank } from '../fuel-tank/schemas/fuel-tank.schema';
import { Scanner } from '../scanner/schemas/scanner.schema';
import { Thruster } from '../thruster/schemas/thruster.schema';

export interface VesselConfigs {
  price: number;
  weight: number;
  journey_distance?: number;
  body: Body[];
  thruster: Thruster[];
  fuelTank: FuelTank[];
  scanner: Scanner[];
}
