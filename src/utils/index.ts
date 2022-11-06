import { Sort } from "../components/Sorting/types";
export const limitText = (text: string, limit: number) =>
  text.length >= limit ? text.slice(0, limit) + "..." : text;

export const formatUsers = (users: any) => {
  const data = users.map((item: any) => {
    return {
      id: item.name.first + item.name.last,
      name: item.name.first + " " + item.name.last,
      email: item.email,
      picture: item.picture.large,
      phone: item.phone,
      location: item.location.city + " " + item.location.state,
    };
  });
  return data;
};

export const sorted = (data: any, value: any) => {
  const sortData = data.sort(
    (a: { [x: string]: number }, b: { [x: string]: number }) => {
      return a[value as keyof typeof Sort] > b[value as keyof typeof Sort]
        ? 1
        : -1;
    }
  );

  return sortData;
};
