/**
 *
 * 925. Long Pressed Name
 *
 * Your friend is typing his name into a keyboard. Sometimes, when typing a character c,
 * the key might get long pressed, and the character will be typed 1 or more times.
 * You examine the typed characters of the keyboard. Return True if it is
 * possible that it was your friends name, with some characters (possibly none)
 * being long pressed.
 *
 *
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed
 *
 *
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it was not in the typed output
 *
 * we go through typed and trying to identify if we have a corrponding letter in name.
 * At the same time, we calculate the difference in positions of these corresponding letters
 * in typed and name. In other words, difference identicates how many “additional” letters contains typed.
 *
 */

function longPressedName(name, typed) {
  let coundDifference = 0;

  for (let i = 0; i < typed.length; i++) {
    if (coundDifference < name.length && name[coundDifference] === typed[i]) {
      coundDifference++;
    } else if (i === 0 || typed[i] !== typed[i - 1]) return false;
  }
  return true;
}
