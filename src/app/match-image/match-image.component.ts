import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoFilePickerAdapter } from '../demo-file-picker.adapter';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-match-image',
  templateUrl: './match-image.component.html',
  styleUrls: ['./match-image.component.scss']
})
export class MatchImageComponent implements OnInit {
  ngOnInit(): void {
  }
  Question = [];
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  adapter = new DemoFilePickerAdapter(this.http);
  firstImage: any = {
    data: [{
      url: ''
    }]
  };
  secondImage: any = {
    data: [{
      url: ''
    }]
  };
  constructor(private http: HttpClient) {
    let payload = {}
    this.syncQuestions();
  }

  handleFileInput(files: FileList, x) {
    if (x == 1) {
      this.fileToUpload1 = files.item(0);
      this.upload(1);
    }
    else
      this.fileToUpload2 = files.item(0);
    this.upload(2);
  }
  upload(x) {
    if (x == 1)
      this.postFile(this.fileToUpload1).subscribe(r => {
        this.firstImage = r;
      }, error => {
        console.log(error);
      });
    else
      this.postFile(this.fileToUpload2).subscribe(r => {
        this.secondImage = r;
      }, error => {
        console.log(error);
      });
  }
  submitQuestion() {
    let payload = {
      firstId: this.firstImage.data[0].id,
      secondId: this.secondImage.data[0].id
    };
    this.http.post(environment.base + '/question/matchImage/add', payload).
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
    let payload = { matchImageId: id };
    this.http.post(environment.base + '/question/matchImage/delete', payload).
      subscribe(res => {
        console.log(res);
        this.syncQuestions();
      })
  }
  syncQuestions() {
    this.http.post(environment.base + '/question/matchImage/get', {}).
      subscribe(res => {
        console.log(res);
        this.Question = res['data'];
        console.log(this.Question)
      })
  }
}
