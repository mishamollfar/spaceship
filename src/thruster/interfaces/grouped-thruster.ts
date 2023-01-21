import { TotalParameter } from '../../interfaces/total-parameter';
import { Thruster } from '../schemas/thruster.schema';

export interface GroupedThruster extends TotalParameter {
  thruster: Thruster[];
}
