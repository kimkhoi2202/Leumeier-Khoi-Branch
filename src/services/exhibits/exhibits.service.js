import { mocks } from "./mock";

export const exhibitRequest = (Name = "Eye, 2007") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[Name];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
exhibitRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error");
  });
