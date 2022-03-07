export const fetchQuizQuestions = async (amount: number) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&type=multiple`;
  const data = await (await fetch(endpoint)).json();

  console.log(data);
};
