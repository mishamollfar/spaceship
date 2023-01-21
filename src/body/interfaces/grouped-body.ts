import { TotalParameter } from '../../interfaces/total-parameter';
import { Body } from '../schemas/body.schema';

export interface GroupedBody extends TotalParameter {
  body: Body[];
}
