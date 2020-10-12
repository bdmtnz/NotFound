import { Component, HostBinding, OnInit } from '@angular/core'; //CORE
import { FormBuilder, FormGroup } from '@angular/forms'; //REACTIVOS
import { OverlayContainer } from '@angular/cdk/overlay'; //THEMES

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';
  @HostBinding('class') componentCssClass : any;
  formGroup: FormGroup;
  over:OverlayContainer;

  constructor(over:OverlayContainer, formBuilder:FormBuilder) 
  {
    this.over = over;
    this.build(formBuilder);
  }

  ngOnInit(){
    this.formGroup.controls.switchTheme.valueChanges.subscribe(
      data => {
        this.onSetTheme(data);
      }
    );
  }

  private build(fb:FormBuilder){
    this.formGroup = fb.group({
      switchTheme: true,
    });
  }
  

  public onSetTheme(o:boolean){
    console.log(o?'light-theme':'dark-theme');
    this.over.getContainerElement().classList.add(o?'light-theme':'dark-theme');
    this.componentCssClass = o?'light-theme':'dark-theme';
  }

}
