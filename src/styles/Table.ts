import styled from 'styled-components';

export const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 0.75em;
  box-shadow: 0 0.25rem 2rem 0 rgb(10 14 29 / 2%),
    0 8px 64px 0 rgb(10 14 29 / 8%);
`;

export const TableTitle = styled.div`
  padding: 3rem 3.5rem 1.5rem 3.5rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000e3f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
    & :last-child {
      margin-top: 1rem;
    }
  }
`;

export const TableSearch = styled.input`
  height: auto;
  padding: 0.5rem 1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75rem;
  width: 30rem;
  max-width: 100%;
  color: #000e3f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledTable = styled.table`
  width: 100%;
  color: #212529;
  border-collapse: collapse;
  table-layout: fixed;
  overflow-x: auto;
`;

export const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  & ${StyledTable} {
    width: auto;
    min-width: 100%;
  }
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #000e3f;
  border: none;
  text-align: center;
  &:first-child {
    padding-left: 3.5rem;
    text-align: left;
  }
  &:last-child {
    padding-right: 3.5rem;
    text-align: right;
  }
`;

export const TableBody = styled.tbody`
  ${TableRow} {
    &:nth-child(odd) {
      background-color: #f4f5f9;
    }
  }
`;

export const TableItem = styled.td<{
  red?: boolean;
  amber?: boolean;
  green?: boolean;
  bold?: boolean;
}>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #000e3f;
  ${(props) => props.red && 'color: #d30000;'}
  ${(props) => props.amber && 'color: #fe7b17;'}
  ${(props) => props.green && 'color: #31a100;'}
  border: none;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & > a {
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    text-decoration: underline;
    display: block;
    -webkit-line-clamp: 1;
    color: #000e3f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:first-child {
    padding-left: 3.5rem;
    text-align: left;
    & > a {
      margin-left: 0;
    }
  }
  &:last-child {
    padding-right: 3.5rem;
    text-align: right;
    & > a {
      margin-right: 0;
    }
  }
`;

export const TableFooter = styled.div`
  padding: 1rem;
  min-height: 4rem;
`;

export const TableButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #157ff9;
  display: block;
  width: 100%;
  text-align: center;
  user-select: none;
  background-color: transparent;
  padding: 0.375rem 0.75rem;
  border: none;
  outline: none;
  transition: color 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #212529;
    text-decoration: none;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 0 2rem 1rem 2rem;
`;

export const Detail = styled.div`
  border-top: 1px solid #eeeeee;
  flex: 1;
  padding: 1.5rem;
  text-align: center;
`;

export const DetailHeader = styled.h6`
  font-size: 0.875rem;
  line-height: 1.75rem;
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
  color: #000e3f;
`;

export const DetailValue = styled.h4<{bold?: boolean}>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 0;
  display: block;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
  color: #000e3f;
`;

export const DetailSecondaryValue = styled.h5`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
  color: #000e3f;
`;

export const TableContainer = styled.div<{
  s?: number;
  m?: number;
  l?: number;
}>`
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
  ${(props) => props.l && `width: calc((100% / 12) * ${props.l});`}
  ${(props) =>
    props.m &&
    `@media (max-width: 1200px) {width: calc((100% / 12) * ${props.m})};`}
  ${(props) =>
    props.s &&
    `@media (max-width: 992px) {width: calc((100% / 12) * ${props.s})};`}
`;

export const MultiTableContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
