// === PROMPT: ===
// Create a class that creates a number stack object.
// The stack should behave like a classic LIFO, where the last number you put in
// is the first one you get out.
// The skeleton for this class has been made for you.  Build out each function
// using test driven development.
// Remember the process -
// - RED:
//   - Write a single test for a small bit of functionality (Don't start writing
//     a test for final, most complex part of the code.  Go slowly, you'll get
//     there)
//   - The test will fail (that's normal)
// - GREEN:
//   - Write the smallest amount of code possible JUST TO MAKE YOUR CURRENT
//     TESTS PASS
//   - Don't worry about having the full functionality yet.  Just make your
//     current tests green.
// - REFACTOR:
//   - Refactor any of your existing code to make it cleaner, you will now know
//     if your changes break any functionality
// - REPEAT:
//   - Start over again from RED, adding another small bit of functionality

/**
 * A LIFO stack that can contain numbers
 */
export class NumberStack {
  private list: number[];

  /**
   * Sets up a new NumberStack object.  Is called whenever `new NumberStack()`
   * is called.
   */
  constructor() {
    this.list = [];
  }

  /** Puts a number on the top of the stack */
  public push(input: number): void {
    this.list.push(input);
  }

  /** Remove the most recently pushed number from the stack and return it */
  public pop(): number | undefined {
    return this.list.pop();
  }

  /**
   * Returns the most recently pushed number in the stack.  Does not modify the
   * contents of the stack itself
   */
  get top(): number | undefined {
    return this.list[this.list.length-1];
  }

  /** Returns all the contents of the stack */
  get contents(): number[] {
    return this.list;
  }
}
