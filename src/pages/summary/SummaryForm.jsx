import { render, fireEvent, screen } from "@testing-library/react";


describe('Checked and Unchecked Test', ()=> {
test("test to check wether the checkbox is unchcked by default", () => {
  render(<App />);
  //Click Button
  const checkBoxName = screen.getByRole('checkbox', { 'name: Disable button' });  
  expect(checkBoxName).not.toBeChecked();   
});

test("Onclick the Checkbox is checked", ()=> {
fireEvent.click(checkBoxName);
expect(checkBoxName).toBeChecked();
})

});