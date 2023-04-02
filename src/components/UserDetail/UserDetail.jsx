

export const UserDetail = ({username, avatarSrc}) => {
  return (
    <div className='col'>
      <div className='card p-2 m-2'>
        <img src={avatarSrc} className='card-img-top mb-2 shadow-sm rounded' alt={`${username}'s Avatar`} />
        <div className='card-bod'>
          <div className='d-flex justify-content-center'>
            <h4 className='card-title'>{username}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
