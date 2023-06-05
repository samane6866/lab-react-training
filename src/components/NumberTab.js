import NumberTabcss from '../components/NumberTab.css';

const NumberTab = ({ limit }) => {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="container">
      <table className="table-container">
        <thead>
          <tr>
            <th className='table-head'>Iteration 12 | List and Keys | NumbersTable</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {numbers.map((number) => (
            <tr key={number}>
              <td
                style={{
                  backgroundColor: number % 2 === 0 ? 'red' : '',
                  width: '50px',
                  height: '50px',
                  border: '1px solid black',
                  padding: '5px',
                }}
              >
                {number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberTab;
