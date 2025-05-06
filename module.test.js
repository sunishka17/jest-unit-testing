import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

test('Testing div (positive integers) -- success', () => {
    const expected = 10;
    const got = mut.div(30, 3);
    expect(got).toBe(expected);
});

test('Testing div (two negative integers) -- success', () => {
    const expected = 20;
    const got = mut.div(-60, -3);
    expect(got).toBe(expected);
});

test('Testing div (negative and positive integers) -- success', () => {
    const expected = -20;
    const got = mut.div(-60, 3);
    expect(got).toBe(expected);
});

test('Testing div (diving 0 by a number) -- success', () => {
    const expected = 0;
    const got = mut.div(0, 10);
    expect(got).toBe(expected);
});

test('Testing div (diving a positive integer by 0) -- success', () => {
    const expected = Infinity;
    const got = mut.div(10, 0);
    expect(got).toBe(expected);
});

test('Testing div (diving a negative integer by 0) -- success', () => {
    const expected = -Infinity;
    const got = mut.div(-10, 0);
    expect(got).toBe(expected);
});

test('Testing div (floats) -- success', () => {
    const expected = 1.1;
    const got = mut.div(5.5, 5);
    expect(got).toBe(expected);
});

test('Testing div (negative floats) -- success', () => {
    const expected = -1.1;
    const got = mut.div(-5.5, 5);
    expect(got).toBe(expected);
});

test('Testing div (repeating floats) -- success', () => {
    const got = mut.div(1, 3);
    expect(got).toBeCloseTo(0.3333, 4);
});

test('Testing containsnumbers (no numbers) -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("abc");
    expect(got).toBe(expected);
});

test('Testing containsnumbers (one numbers) -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("a1bc");
    expect(got).toBe(expected);
});

test('Testing containsnumbers (some numbers) -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("ab123c");
    expect(got).toBe(expected);
});

test('Testing containsnumbers (all numbers) -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("123");
    expect(got).toBe(expected);
});

test('Testing containsnumbers (empty string) -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
});

test('Testing containsnumbers (only characters no letters/numbers) -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("!@#$%%^&");
    expect(got).toBe(expected);
});

// my test case passes for the bug
// the bug was if there is an empty string with spaces, it considered it as 0, and returned true
// now it does not do that because i put a !== condition for checking this, hence this test passes
test('Testing containsnumbers (testing for the bug) -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("   ");
    expect(got).toBe(expected);
});

