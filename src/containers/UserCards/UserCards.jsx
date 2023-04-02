import UserDetail from '../../components/UserDetail';


export const UserCards = ({users}) => {
  const userCardsArray = users.map((user) => {
    return (
        <UserDetail
          key={user.id}
          avatarSrc={user.avatar_url}
          username={user.login}
          follower={user.followers_url}
          following={user.following_url}
        />
    );
  });

  return <div className='row row-cols-4 mt-2'>{userCardsArray}</div>;
};
