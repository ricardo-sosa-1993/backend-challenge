import { IMappingRule } from "./types";
import { NumberMapper } from "./number-mapper";

describe("NumberMapper", () => {
  const mappingRules: IMappingRule[] = [
    { condition: num => num % 2 === 0 && num % 9 === 0, value: "first" },
    { condition: num => num % 2 === 0, value: "second" },
    { condition: num => num % 9 === 0, value: "third" }
  ];
  const numberMapper = new NumberMapper(mappingRules);
  test("should return the mapping value of the rule with more precedence when it is satisfied", () => {
    expect(numberMapper.map(18)).toBe("first");
  });
  test("should return the mapping value of the rule with less precedence when it is satisfied", () => {
    expect(numberMapper.map(27)).toBe("third");
  });
  test("should return the unchanged number when no rule is satisfied", () => {
    expect(numberMapper.map(5)).toBe(5);
  });
});
