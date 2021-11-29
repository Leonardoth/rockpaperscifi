## Concept:

    Mobile First

## Technology Practice:

    Styled components (First time)

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

## TODO:

- Clean the Code better!
- Take Game Logic to another file. It's Confusing rn.
