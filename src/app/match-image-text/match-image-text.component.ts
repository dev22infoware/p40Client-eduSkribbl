import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoFilePickerAdapter } from '../demo-file-picker.adapter';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-match-image-text',
  templateUrl: './match-image-text.component.html',
  styleUrls: ['./match-image-text.component.scss']
})
export class MatchImageTextComponent implements OnInit {
  ngOnInit(): void {
  }
  Question = [];
  text:string = "";
  fileToUpload: File = null;
  adapter = new DemoFilePickerAdapter(this.http);
  image: any = {
    data: [{
      url: ''
    }]
  };
  constructor(private http: HttpClient) {
    let payload = {}
    this.syncQuestions();
  }

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      this.upload();
  }
  upload() {
      this.postFile(this.fileToUpload).subscribe(r => {
        this.image = r;
        console.log(this.image);
      }, error => {
        console.log(error);
      });
  }
  submitQuestion() {
    let payload = {
      mediaId: this.image.data[0].id,
      text: this.text
    };
    this.http.post(environment.base + '/question/matchImageText/add', payload).
      subscribe(res => {
        console.log(res);
        this.syncQuestions();
      })
  }
  postFile(fileToUpload: File) {
    console.log('postFile')
    const formData: FormData = new FormData();
    formData.append('media', fileToUpload, fileToUpload.name);
    return this.http.post(environment.base + '/media/add/', formData,
    )
  }
  delete(id) {
    let payload = { matchImageTextId: id };
    this.http.post(environment.base + '/question/matchImageText/delete', payload).
      subscribe(res => {
        console.log(res);
        this.syncQuestions();
      })
  }
  syncQuestions() {
    this.http.post(environment.base + '/question/matchImageText/get', {}).
      subscribe(res => {
        console.log(res);
        this.Question = res['data'];
        console.log(this.Question)
      })
  }

}
