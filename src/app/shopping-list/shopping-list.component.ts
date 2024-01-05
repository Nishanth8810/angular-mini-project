import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  Ingredient:Ingredient[]=[new Ingredient('tomato',12),new Ingredient('apple',10)];

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
