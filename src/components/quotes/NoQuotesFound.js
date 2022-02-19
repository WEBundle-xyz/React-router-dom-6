import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className='btn' href='#4'>Add Quote</a>
    </div>
  );
};

export default NoQuotesFound;
