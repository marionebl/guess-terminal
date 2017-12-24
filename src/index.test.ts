import { guessTerminal } from ".";

const env = Object.assign({}, process.env);

beforeAll(() => {
  process.env = {};
});

afterAll(() => {
  process.env = env;
});

it("exists", () => {
  expect(typeof guessTerminal).toBe("function");
});

it("returns expected value terminal", () => {
  process.env.TERM_PROGRAM = "Apple_Terminal";

  const expected = process.platform === "darwin" ? "terminal" : null;

  expect(guessTerminal()).toBe(expected);
});

it("returns expected value iterm2", () => {
  process.env.TERM_PROGRAM = "iterm";

  const expected = process.platform === "darwin" ? "iterm2" : null;

  expect(guessTerminal()).toBe(expected);
});

it("returns expected value hyper", () => {
  process.env.TERM_PROGRAM = "Hyper";

  const expected = process.platform === "darwin" ? "hyper" : null;

  expect(guessTerminal()).toBe(expected);
});
