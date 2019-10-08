import { IMappingRule, NumberMapper } from "./number-mapper";

const mappingRules: IMappingRule[] = [
  { condition: num => num % 3 === 0 && num % 5 === 0, value: "Linianos" },
  { condition: num => num % 3 === 0, value: "Linio" },
  { condition: num => num % 5 === 0, value: "IT" }
];

const numberMapper = new NumberMapper(mappingRules);

for (let i = 1; i <= 100; i++) {
  console.log(numberMapper.map(i));
}
