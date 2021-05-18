import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <form>
        <input type='text' value={'email'}></input>
        <input type='password' value={'password'}></input>
      </form>
</div>
  );
}
const div = styled.div`
  font-size: 20px
  height: 55px
`
export default App;
