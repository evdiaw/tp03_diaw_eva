import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Catalogue } from '../core/Catalogue';

@Component({
  selector: 'app-comp-catalogue',
  templateUrl: './comp-catalogue.component.html',
  styleUrls: ['./comp-catalogue.component.css']
})
export class CompCatalogueComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  tabProduits: Array<Catalogue> = [];

  ngOnInit(): void {
    this.catalogueService.getCatalogue().subscribe({
      next: (data) => {
        this.tabProduits = data;
      }
    });

  }

  ngOnDestroy(): void {
    //this.tabProduits.unsubscribe();
  }

}
