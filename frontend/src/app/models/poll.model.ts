/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 08:24:17
 * @modify date 2020-11-29 08:24:17
 * @desc Poll Model
 */
export interface Poll {
  id: number; // 1001
  question: string; // Which day of the week you like the most?
  results: number[]; // [0, 0, 0, 5, 2]
  options: string[]; // [Sunday, Monday, Thursday...]
  thumbnail: string; // https;//image.png
  voted: boolean;
}
