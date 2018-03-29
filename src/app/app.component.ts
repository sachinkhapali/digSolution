import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
 
  ngOnInit() {
    $(document).ready(function() {      
      $('.center').hover(
        function () {         
          $(".deg0").show();
          $(".deg45").show();
          $(".deg315").show();
        }, 
       function () {  
        
      });
      $('.deg225').hover(function(){
        $(".deg0").hide();
        $(".deg45").hide();
        $(".deg315").hide();
      });      
    });
  }
}


