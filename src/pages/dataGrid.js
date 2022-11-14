import React from 'react';
import 'devextreme/dist/css/dx.dark.css';
import ODataStore from 'devextreme/data/odata/store';

import DataGrid, {
  Column, Export,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';

import DiscountCell from './DiscountCell.js';

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
  store: new ODataStore({
    url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
    key: 'Id',
    beforeSend(request) {
      request.params.startDate = '2020-05-10';
      request.params.endDate = '2020-05-15';
    },
  }),
};

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      <DataGrid
      
      onExporting={this.onExporting}
        dataSource={dataSourceOptions}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        height={'73vh'}
        onContentReady={this.onContentReady}
      >
        <GroupPanel visible={true} />
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <Grouping autoExpandAll={false} />

        <Column allowExporting={true} dataField="Product" groupIndex={0} />
        <Column allowExporting={true}
          dataField="Amount"
          caption="Sale Amount"
          dataType="number"
          format="currency"
          alignment="right"
        />
        <Column allowExporting={true}
          dataField="Discount"
          caption="Discount %"
          dataType="number"
          format="percent"
          alignment="right"
          allowGrouping={false}
          cellRender={DiscountCell}
          cssClass="bullet"
        />
        <Column allowExporting={true} dataField="SaleDate" dataType="date" />
        <Column allowExporting={true} dataField="Region" dataType="string" />
        <Column allowExporting={true} dataField="Sector" dataType="string" />
        <Column allowExporting={true} dataField="Channel" dataType="string" />
        <Column allowExporting={true} dataField="Customer" dataType="string" width={150} />

        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
        <Export enabled={true} />
      </DataGrid>
    );
  }


  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    exportDataGrid({
        component: e.component,
        worksheet: worksheet,
        customizeCell: function(options) {
            const excelCell = options;
            excelCell.font = { name: 'Arial', size: 12 };
            excelCell.alignment = { horizontal: 'left' };
        } 
    }).then(function() {
        workbook.xlsx.writeBuffer()
            .then(function(buffer) {
                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
            });
    });
    e.cancel = true;
}
  onContentReady(e) {
    if (!this.state.collapsed) {
      e.component.expandRow(['EnviroCare']);
      this.setState({
        collapsed: true,
      });
    }
  }
}

export default Grid;
