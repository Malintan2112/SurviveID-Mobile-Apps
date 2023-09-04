export const convertToUserID = id => {
  let nolNumber = '';
  for (let index = 0; index < 4 - `${id}`.length; index++) {
    nolNumber += '0';
  }
  return `U${nolNumber}${id}`;
};
export const convertToEnrrolmentID = id => {
  let nolNumber = '';
  for (let index = 0; index < 4 - `${id}`.length; index++) {
    nolNumber += '0';
  }
  return `ER${nolNumber}${id}`;
};

export const convertToFormatLength = data => {
  let nolNumber = '';
  for (let index = 0; index < 2 - `${data}`.length; index++) {
    nolNumber += '0';
  }
  return `${nolNumber}${data}`;
};

export const NumberWithCommas = x =>
  parseInt(x)
    ? String(parseInt(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    : String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
