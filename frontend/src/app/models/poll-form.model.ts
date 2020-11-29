/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-29 13:41:13
 * @modify date 2020-11-29 13:41:13
 * @desc Used to pass poll form values
 */

export interface PollForm {
  question: string; // Which day of the week you like the most?
  options: string[]; // [Sunday, Monday, Thursday...]
  thumbnail: string; // https;//image.png
}
