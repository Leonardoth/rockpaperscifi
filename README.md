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
