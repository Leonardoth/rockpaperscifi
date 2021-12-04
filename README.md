## Concept:

    Mobile First

## Technology Practice:

    - Styled components (First time)
    - Custom Hooks

## Technology Used:

    - React
    - Javascript
    - Html
    - Styled Components (CSS in JS)

## Learned:

- Challenge: Importing font inside GlobalStyle.
  Problem: I couldn't use the font @imported in createGlobalStyle inside nested components.

  - Tried:
    - Using !important when defining font
    - Using different selectors (specific ones)
  - Solution:
    - Importing the font in the index.html header did the trick and made it available for all the components.

- Challenge: Accessing state inside function.
  Problem: Inside the game logic, one of the functions couldn't access the selection states.

  - Tried:

    - Using normal variables, didn't work because the components depends on it being a state.

  - Solution:
    - I had to import useEffect, set it to call the function, passing the states as params. Doesn't seem to be the right way, but it's working as intended.

- Challenge: Using grid in the mobile, when only with one 'player', the layout is not centralized.
  Problem: Label and Button were not centralized, until the house draw it's option.

  - Tried:

    - Changing elements width, did not work.
    - Changing template-areas, it'd only make it worse.

  - Solution:
    - At the moment, we hide the label/button until the result is not shown.

## TODO:

- Clean the Code better!
- Take Game Logic to another file. It's Confusing rn.
- Fix to Pixel-perfect level so buttons match design.
- Show empty space until the house picks

- ~~Add the bonus challenge (Lizard, Spock)~~

## Extras (Things that were not in the challenge):

- Coin turning effect when player chooses/house chooses
- Option to reset score

- ~~Add Specific messages for each result, like, "Scissors cuts paper!" before the "YOU WIN"~~
- ~~Save score on localStorage~~
