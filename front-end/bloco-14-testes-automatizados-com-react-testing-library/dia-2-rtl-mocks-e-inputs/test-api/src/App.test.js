import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputName = screen.getByRole('textbox', { name: /nome/i });
  expect(inputName).toBeInTheDocument();
  expect(inputName).toHaveValue('');
  userEvent.type(inputName, 'Estudante da Trybe');
  expect(inputName).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
