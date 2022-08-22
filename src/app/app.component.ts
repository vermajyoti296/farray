 import { Component } from '@angular/core';
 import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormArray Example in Angular Reactive forms';
 
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  
  }
 
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
// export class country {
//   id: string;
//   name: string;
 
//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
//   title = 'practice';
//   loginForm: FormGroup;
//   submitted: boolean = false;
  
//   constructor(private fb: FormBuilder){
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required,Validators.email]],
//       password: ['', [Validators.required]],
//       hobbies:this.fb.array([])
//     })
//     this.loginForm.patchValue({
//       email:'abc@gmail.com',
//       password:'1234'
//     })
//     this.loginForm.get('email')?.valueChanges.subscribe(value=>{
//       console.log(value);
//     });
//   }
//   get hobbies(){
//     return (<FormArray>this.loginForm.get('hobbies')).controls;
//   }
//   OnSubmit() {
//     this.submitted = true;
//     console.log(this.loginForm.value);
//   }
//   onhobby(){
//     const controls=[null,[Validators.required]];
//     (<FormArray>this.loginForm.get('hobbies')).push(controls);
//   }
//   removeitem(i:number){
//     const control = <FormArray>this.loginForm.get('hobbies');
//     control.removeAt(i);
//   }
//   get f(): any {
//     return this.loginForm.controls;
//   }
// }

