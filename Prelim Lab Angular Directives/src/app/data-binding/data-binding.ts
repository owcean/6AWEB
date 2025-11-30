import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration'; //text interpolation
  imageUrl = 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?cs=srgb&dl=pexels-chevonrossouw-2558605.jpg&fm=jpg';
  w = 300;
  h = 200;

  textColor = 'blue'

  yourName = ''

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  //Interpolation
  studentName = "Ashley";
  score = 95;

  //Proper binding
  imgUrl = "https://th.bing.com/th/id/R.fa5829b30f1d70d65d34c665fd40d730?rik=a89Xh9QxYpAxiw&riu=http%3a%2f%2fhdwallpapers2013.com%2fwp-content%2fuploads%2f2012%2f10%2fcute-kids.jpg&ehk=LhUC4wWiEzp11Cq%2fp5OBUAglB%2bbBAqhT0NBoVpj77N4%3d&risl=&pid=ImgRaw&r=0";
  isDisabled = true;

  //Attribute Binding
  colSpanValue = 3;

  //Class binding
  isPassing = true;

  //Style binding
  boxColor = "Purple";
  boxSize = "150px"

}