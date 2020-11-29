/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 08:24:17
 * @modify date 2020-11-29 08:24:17
 * @desc Poll Model
 */
import { PollForm } from './poll-form.model';

export interface Poll extends PollForm {
  id: number; // 1001
  results: number[]; // [0, 0, 0, 5, 2]
  voted: boolean;
}
