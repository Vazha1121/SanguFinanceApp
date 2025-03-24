import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-budgets',
  imports: [FormsModule],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.scss',
})
export class BudgetsComponent {
  public prodName!: string;
  public totalBudget: any;
  public totalUsed: any;
  public budget: any;
  public usedAmount!: any;
  public totalLeft:any;
  public balanceLeft!: any;
  public prodArray: any = [];
  public usedMoney:any = [];
  public name: any;
  public showInput:boolean = false;

  showInp(){
    this.showInput = true
  }

  public sumUsed!:any
  onSubmit() {
    this.showInput = false
    this.prodArray.push({
      Name: this.prodName,
      Budget: this.budget,
      usedAmount: this.usedAmount,
      balanceLeft: this.budget - this.usedAmount,
      totalUsed: this.totalBudget - this.usedAmount
    });
    this.prodName='';
    this.budget = '';
    this.usedAmount = '';
    this.balanceLeft = '';
  
  }
  public total:any;
  addBudget(){
    this.total = this.totalBudget
  }
  
}
