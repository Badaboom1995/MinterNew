import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'components/Tables/Table';
import TableCell from 'components/Tables/TableCell';
import TableRow from 'components/Tables/TableRow';
import TableHeadRow from 'components/Tables/TableHeadRow';

class Home extends React.Component {
  onInputChange = value => {
    console.log(value);
  };
  onSelectChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <h2 className="title title--big">Address Mxbb3c9809459e031906a0b573d5bac15601216eb7</h2>
        </div>
        <div className="card__body">
          <Table title="Coins">
            <TableHeadRow>
              <TableCell>Coin</TableCell>
              <TableCell>Amount</TableCell>
            </TableHeadRow>
            <TableRow>
              <TableCell>MNT</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </Table>
          <Table title="Transactions">
            <TableHeadRow>
              <TableCell>TxHash</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>From</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableHeadRow>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
