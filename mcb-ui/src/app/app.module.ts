import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './components/battle/battle.component';
import { CardComponent } from './components/card/card.component';
import {
  MatDialogModule, MatDialogConfig, MatFormFieldModule, MatInputModule, MatRadioModule, MatCheckboxModule, MatSelectModule, MatExpansionModule,
  MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTabsModule, MatCardModule, MatSlideToggleModule, MatTableModule,
  MatDividerModule, MatAutocompleteModule, MatIconModule, MatSnackBarModule, MatPaginatorModule, MatListModule, MatSortModule, MatBottomSheetModule, 
  MatTooltipModule, MatNativeDateModule, MatButtonToggleModule, MatBadgeModule, MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatListModule,
    MatSortModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatTooltipModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
