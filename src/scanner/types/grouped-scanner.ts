import { TotalParameter } from '../../interfaces/total-parameter';
import { Scanner } from '../schemas/scanner.schema';

export interface GroupedScanner extends TotalParameter {
  scanner: Scanner[];
}
