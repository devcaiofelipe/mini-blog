import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index'

describe('<Button />', () => {
  it('should render the button with the text "Load More"', () => {
    render(<Button text="load more"/>);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();  
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn}/>);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render on screen when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} disabled={false}/>);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should not render on screen when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} disabled={true}/>);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="load more" onClick={fn} disabled={true}/>);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
})