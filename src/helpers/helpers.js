export const checkAmount = (base, accumulated) => {
  let dinamicClass;
  if ((base / 4) > accumulated) dinamicClass = "alert alert-danger";
  else if ((base / 2) > accumulated) dinamicClass = "alert alert-warning";
  else dinamicClass = "alert alert-succes";
  return dinamicClass;
};
