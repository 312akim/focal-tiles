import { render, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import TextField from './TextField';

describe('TextField', () => {
  const setup = () => {
    const Parent = () => {
      const [value, setValue] = useState();
      return (
        <TextField id={'nickname'} label={'Nickname'} value={value} setValue={setValue}/>
      )
    };

    const utils = render(<Parent />);
    const input = utils.getByTestId('nickname');

    return {input, ...utils}
  }

  it('changes the value props passed on change', () => {
    const {input} = setup();
    fireEvent.change(input, {target: {value: 'Alex'}});
    expect(input.value).toBe('Alex');
  });
});
