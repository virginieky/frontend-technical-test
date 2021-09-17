import moment from 'moment';

const getDisplayedDate = value => {
  if (value) {
    return moment.unix(value).format("MM/DD/YYYY");
  } 
  return null;
};


export default getDisplayedDate;
