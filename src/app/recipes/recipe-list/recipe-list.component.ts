import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  Recipe:Recipe[]=[
    new Recipe('A Test Recipe','Really good recipe','https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704412800&semt=sph.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fbucatini-with-mushroom-ragu-dandelion-greens-and-tarragon&psig=AOvVaw3qGGEB_vsKU3iWO9M3kJLE&ust=1704544683337000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOj0ovahxoMDFQAAAAAdAAAAABAE')
  ,new Recipe('A Test Recipe 2','Really good recipe 2','https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704412800&semt=sph.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fbucatini-with-mushroom-ragu-dandelion-greens-and-tarragon&psig=AOvVaw3qGGEB_vsKU3iWO9M3kJLE&ust=1704544683337000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOj0ovahxoMDFQAAAAAdAAAAABAE')
];
  
  ngOnInit(): void {
    
  }
}
