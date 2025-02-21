import { faker } from "@faker-js/faker";

const expirationDate = () => {
  const expiration = faker.date.future();
  const month = (expiration.getMonth() + 1).toString().padStart(2, "0");
  const year = expiration.getFullYear().toString().slice(-2);
  const expirationDate = `${month}/${year}`;
  return expirationDate;
};
const generateCreditInfo = () => {
  const creditInfo = {
    name: faker.person.fullName,
    creditCardNumber: faker.finance.creditCardNumber(),
    expirationDate: expirationDate(),
    cvv: faker.finance.creditCardCVV(),
  };

  return creditInfo;
};

export const fakeCreditUser = generateCreditInfo();
