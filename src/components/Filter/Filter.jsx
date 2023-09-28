import { LabelStyle, InputStyle } from 'components/App.styled';

export const Filter = ({ filter, onChangeFilter }) => (
  <LabelStyle>
    Find contacts by name:
    <InputStyle
      type="text"
      name="filter"
      value={filter}
      title="Enter the name"
      required
      onChange={onChangeFilter}
    />
  </LabelStyle>
);


