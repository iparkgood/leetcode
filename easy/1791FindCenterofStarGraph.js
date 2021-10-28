const findCenter = (edges) => {
  const [v1, v2] = edges[0]; //[1, 2]
  const [v3, v4] = edges[1]; //[2, 3]

  return v1 === v3 || v1 === v4 ? v1 : v2;
};
