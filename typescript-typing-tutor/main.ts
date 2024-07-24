let index = 0;

const $characters = document.querySelectorAll('span');
if (!$characters) {
  throw new Error('$span does not exist');
}

let $currentCharacter = $characters[index];
$currentCharacter.setAttribute('class', 'current');

let totalCorrect = 0;
let totalTyped = 0;

document.addEventListener('keydown', function (e: KeyboardEvent) {
  if (index < $characters.length) {
    totalTyped++;
    if (e.key === $currentCharacter.textContent) {
      $currentCharacter.setAttribute('class', 'green');
      totalCorrect++;
      index++;
      if (index !== $characters.length) {
        $currentCharacter = $characters[index];
        $currentCharacter.setAttribute('class', 'current');
      } else {
        const $score = document.createElement('p');
        $score.textContent = `Score: ${totalCorrect} / ${totalTyped} (${
          Math.round(
            ((totalCorrect / totalTyped) * 100 + Number.EPSILON) * 100
          ) / 100
        }%)`;
        const $container = document.querySelector('.container');
        $container?.append($score);
      }
    } else {
      $currentCharacter.setAttribute('class', 'red');
    }
  }
});
