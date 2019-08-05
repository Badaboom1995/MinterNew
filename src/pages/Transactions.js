import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'components/Tables/Table';
import TableCell from 'components/Tables/TableCell';
import TableRow from 'components/Tables/TableRow';
import TableHeadRow from 'components/Tables/TableHeadRow';

class Transactions extends React.Component {
  onInputChange = value => {
    console.log(value);
  };
  onSelectChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div className="card">
        <div className="card__body">
          <Table title="Transactions">
            <TableHeadRow>
              <TableCell>TxHash</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>From</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableHeadRow>
            <TableRow>
              <TableCell>MNT</TableCell>
              <TableCell>0</TableCell>
              <TableCell>MNT</TableCell>
              <TableCell>0</TableCell>
              <TableCell>MNT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Transactions);
