import card from '../assets/images/card.svg';
import wallet from '../assets/images/wallet.svg';

interface IBAndsArray {
  data: string;
}

type ImageType = typeof card | typeof wallet;

interface ITransactionsArray {
  image: ImageType;
  title: string;
  info: string;
  sum: string;
}

export const banksArray: IBAndsArray[] = [
  { data: 'Signature RBC visa ( ****3234)' },
  { data: 'TD Bank Debit ( ****0024)' },
];

export const transactionsArray: ITransactionsArray[] = [
  {
    image: card,
    title: 'Cineplex Inc.',
    info: 'Sept 24, Payment',
    sum: '-$42.50',
  },
  {
    image: wallet,
    title: 'RBC Royal Bank',
    info: 'Aug 1, Transfer from bank',
    sum: '+$500.00',
  },
  {
    image: card,
    title: 'Cineplex Inc',
    info: 'Sept 24, Payment',
    sum: '-$42.50',
  },
];
