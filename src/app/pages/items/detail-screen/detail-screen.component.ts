import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.scss']
})
export class DetailScreenComponent implements OnInit {

  @ViewChild('rowDetailTpl', { static: true }) rowDetailTpl: TemplateRef<any>;

  // Options for ngx-datatable
  options: any = { checkboxes: true, pagination: false }; // Disable pagination
  data: any[] = [];
  columns: any[] = [];
  
  // Dummy data for transaction details
  transactionDetails = {
    transactionNumber: '140473',
    location: 'ACME',
    saleType: 'New Sale',
    staff: 'Mijay',
    taxType: 'T',
    dateIssued: '09/02/2024',
    invoiceTo: {
      name: 'Navneet Singh'
    },
    billTo: {
      name: 'Jane Doe',
      address: '456 Another St, Madrid, Spain',
      email: 'jane@example.com',
      phone: '987-654-3210'
    },
    shipTo: {
      name: 'John Smith',
      address: '789 Third St, Seville, Spain',
      email: 'john@example.com',
      phone: '654-321-9870'
    },
    totalBeforeDiscount: 1110.00,
    discountAmount: 0.00,
    subtotal: 1110.00,
    salesTax: 0.00,
    total: 1110.00,
    payments: 0.00,
    balance: 1110.00
  };

  constructor() { }

  ngOnInit(): void {
    // Configure columns for ngx-datatable
    this.columns = [
      { key: 'id', title: "ID", width: 50, sorting: true },
      { key: 'name', title: 'Name', width: 100 },
      { key: 'phone', title: 'Phone', align: { head: 'center' }, width: 120, sorting: true, noWrap: { head: true, body: true } },
      { key: 'company', title: 'Company', width: 300, sorting: true, align: { head: 'left', body: 'right' }, noWrap: { head: true, body: true } },
      { key: 'date', title: 'Date', width: 100, sorting: false, pinned: false },
      { key: 'zip', title: 'ZIP', sorting: false, width: 120 }
    ];

    // Dummy data for ngx-datatable
    this.data = [
      { id: 1, name: 'John Doe', phone: '123-456-7890', company: 'Company A', date: '2024-09-02', zip: '10001' },
      { id: 2, name: 'Jane Smith', phone: '098-765-4321', company: 'Company B', date: '2024-09-03', zip: '10002' }
    ];
  }

  onCheckboxClick(selectCheckBoxArr: any[]) {
    alert(JSON.stringify(selectCheckBoxArr));
  }
}
