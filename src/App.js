import React, { Component } from 'react';
import Customer from './compo/Customer';
const customers=[ {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'JUNGMIN',
  'gender':'Man',
  'job':'PROGRAMER'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'JUNGMIN2',
  'gender':'Man2',
  'job':'PROGRAMER2'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':'JUNGMIN3',
  'gender':'Man2',
  'job':'PROGRAMER3'
}
]

class App extends Component{
  render(){
    return (
      <div>
     
        {
          customers.map( i => {
            return(
              <Customer 
              key={i.id}
                id={i.id}
                image={i.image}
                name={i.name} 
                gender={i.gender} 
                job={i.job}
              />
            );

          })
        }



  
      </div>
    );
  }
}

export default App;
