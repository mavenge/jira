interface SearchProps  {
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchProps['params']) => void;
  users: Api.User[];
};

function Search({ params, setParams, users }: SearchProps) {
  return (
    <form>
      <input
        type='text'
        value={params.name}
        onChange={e => setParams({ ...params, name: e.target.value })}
      />
      <select
        value={params.personId}
        onChange={e => setParams({ ...params, personId: e.target.value })}
      >
        <option value=''>负责人</option>
        {users.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Search;
