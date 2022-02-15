function List({ list, users }: { list: Api.Project[]; users: Api.User[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find(user => user.id === project.personId)?.name || ''}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
