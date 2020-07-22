import moment from 'moment';

const formatDate = (stringDate: string): string =>
  moment(stringDate).format('DD/MM/yyyy');

export default formatDate;
