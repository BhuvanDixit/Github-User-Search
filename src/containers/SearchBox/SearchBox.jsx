import InputBox from '../../components/InputBox';
import UserCards from '../UserCards';

export const SearchBox = ({ inputOnChange, users, text, loading, apiLimitExceed }) => {
  return (
    <>
      <div className='d-flex container-lg mt-3'>
        <InputBox
          type='text'
          handleChange={inputOnChange}
          maxWidth='75'
          placeholder='Enter username here'
        />
      </div>
      {apiLimitExceed ?
      <h3 className='d-flex justify-content-center m-5'>
        API rate limit exceeded, try again after some time
      </h3> :
      <div className='container'>
        {text === '' ? (
          <div className='d-flex justify-content-center mt-3'>
            <h3>Search for users</h3>
          </div>
        ) : loading ? (
          <h3 data-testid='loading' className='d-flex justify-content-center m-5'>
            Content Loading....
          </h3>
        ) : users.length > 0 ? (
          <UserCards users={users} />
        ) : (
          <div className='d-flex justify-content-center m-3'>
            <h3>Found No matching users</h3>
          </div>
        )}
      </div>}
    </>
  );
};
