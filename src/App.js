import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id':1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '9612',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id':2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '똥스',
    'birthday' : '2002',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id':3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '린다',
    'birthday' : '2003',
    'gender' : '여자',
    'job' : '대학생'
  }
];

function App() {
  return (
    <div>
      {
        customers.map( (c) => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
       
    </div> 
  );
}

export default App;
