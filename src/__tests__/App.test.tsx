import { test, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import { filterOptions, orderOptions, perPageOptions, searchOptions, sortOptions } from '../constants/options.ts';
import errors from '../constants/errors.ts';
import App from '../components/App.tsx';

let user: UserEvent;

// Setup user events and render the page
beforeAll(() => {
	user = userEvent.setup();
  render(<App />);
})

test('renders the page', () => {
	expect(screen.getByLabelText("heading").innerHTML).toBe("Github Repo Search");
	expect(screen.queryByLabelText("search-form")).not.toBeNull();
	expect(screen.queryByLabelText("table-container")).toBeNull();
});

test('error when no owner is entered', async () => {
	const searchBtn = screen.getByLabelText('form-submit-button');
	await user.click(searchBtn);
	expect(screen.getByLabelText("error-message").innerHTML).toBe(errors.INVALID_INPUT);
});

test('able to enter owner in text input', async () => {
	const ownerInput = screen.getByLabelText('repo-owner-text-input').querySelector('input') as HTMLInputElement;
	await user.type(ownerInput, 'test owner');
	expect(ownerInput.value).toBe('test owner');
});

test('able to select option in "select by" radio group', async () => {
	const userRadio: HTMLInputElement = screen.getByLabelText(searchOptions[0].label);
	const orgRadio: HTMLInputElement = screen.getByLabelText(searchOptions[1].label);
	expect(userRadio.checked).toBe(true);
	expect(orgRadio.checked).toBe(false);
	await user.click(orgRadio);
	expect(userRadio.checked).toBe(false);
	expect(orgRadio.checked).toBe(true);
});

test('able to select option in "sort by" dropdown', async () => {
	const sortBySelect = screen.getByLabelText("sort-by-select").children[0];
	const sortBySelectInput = screen.getByLabelText("sort-by-select").querySelector('input') as HTMLInputElement;
	expect(sortBySelectInput.value).toBe(sortOptions[0].value);
	await user.click(sortBySelect);
	const numStarsOption = screen.getByTestId(`sort-by-${sortOptions[1].value}`);
	await user.click(numStarsOption);
	expect(sortBySelectInput.value).toBe(sortOptions[1].value);
});
	
test('able to select option in "order by" radio group', async () => {
	const ascendinguserRadio: HTMLInputElement = screen.getByLabelText(orderOptions[0].label);
	const descendingRadio: HTMLInputElement = screen.getByLabelText(orderOptions[1].label);
	expect(ascendinguserRadio.checked).toBe(true);
	expect(descendingRadio.checked).toBe(false);
	await user.click(descendingRadio);
	expect(ascendinguserRadio.checked).toBe(false);
	expect(descendingRadio.checked).toBe(true);
});

test('able to select option in "filter by" dropdown', async () => {
	const filterBySelect = screen.getByLabelText("filter-by-select").children[0];
	const filterBySelectInput = screen.getByLabelText("filter-by-select").querySelector('input') as HTMLInputElement;
	expect(filterBySelectInput.value).toBe(filterOptions[0].value);
	await user.click(filterBySelect);
	const publicOption = screen.getByTestId(`filter-by-${filterOptions[1].value}`);
	await user.click(publicOption);
	expect(filterBySelectInput.value).toBe(filterOptions[1].value);
});
	
test('able to select option in "per page" dropdown', async () => {
	const perPageSelect = screen.getByLabelText("per-page-select").children[0];
	const perPageSelectInput = screen.getByLabelText("per-page-select").querySelector('input') as HTMLInputElement;
	expect(perPageSelectInput.value).toBe(perPageOptions[0].value);
	await user.click(perPageSelect);
	const fiftyOption = screen.getByTestId(`per-page-${perPageOptions[1].value}`);
	await user.click(fiftyOption);
	expect(perPageSelectInput.value).toBe(perPageOptions[1].value);
});