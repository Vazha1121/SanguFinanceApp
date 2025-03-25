import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DatepickerViewsSelectionExample } from '../date-picker/date-picker.component';

@Component({
  selector: 'app-budgets',
  imports: [FormsModule,DatepickerViewsSelectionExample],
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
    this.sumUsed = this.prodArray.reduce((acc:any,item:any) => acc + Number(item.usedAmount), 0)
    console.log(this.sumUsed);
  
  }
  public total:any;
 public addBudgetDisable: boolean = false
  addBudget(){
    this.addBudgetDisable = !this.addBudgetDisable;
    this.total = this.totalBudget
  }
  /* edit */
  editBtn(index:any,name:string,budget:any,usedamount:any){
    this.prodArray.splice(index, 1)
    this.showInput = true
    this.prodName = name;
    this.budget = budget;
    this.usedAmount = usedamount;
  }
}
