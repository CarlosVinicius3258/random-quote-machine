import { randomQuote } from '../service/axios';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote } from '../store/quoteSlice';
export default function QuoteController() {
  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);
  const dispatch = useDispatch();

  const handleGetQuote = async () => {
    try {
      const res = await randomQuote.get('/random');
      dispatch(
        getQuote({
          quote: res.data.content,
          author: res.data.author,
        })
      );
    } catch (error) {
      console.log(' Error Quote', error);
    }
  };

  return {
    handleGetQuote,
    quote,
    author,
  };
}
