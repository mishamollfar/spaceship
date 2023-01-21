import { TotalParameter } from '../../interfaces/total-parameter';
import { FuelTank } from '../schemas/fuel-tank.schema';

export interface GroupedFuelTank extends TotalParameter {
  fuelTank: FuelTank[];
}
