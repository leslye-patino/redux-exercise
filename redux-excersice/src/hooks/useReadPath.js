import { QueryParams } from "../constants";

export const useReadPath = () => {
  // TODO check if we are on client side
  const params = new URL(document.location).searchParams;
  const name = params.get(QueryParams.name);
  console.log({ name });
  return { name: name || "" };
};
