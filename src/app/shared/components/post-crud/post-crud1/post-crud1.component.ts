import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { postArr } from 'src/app/shared/consts/post';
import { Ipost } from 'src/app/shared/models/post';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UniqueIdService } from 'src/app/shared/services/unique-id.service';

@Component({
  selector: 'app-post-crud1',
  templateUrl: './post-crud1.component.html',
  styleUrls: ['./post-crud1.component.scss']
})
export class PostCrud1Component implements OnInit {

  postArr: Array<Ipost> = postArr;

  isInEditMode: boolean = false;
  editId !: string;

  trackById(index: number, student: Ipost) {
    return student.id;
  }

  @ViewChild("titleRef") _titleRef !: ElementRef;
  @ViewChild("imgRef") _imgRef !: ElementRef;
  @ViewChild("contentRef") _contentRef !: ElementRef;

  onPostAdd() {
    let newPost = {
      id: this._UniqueIdService.generateId(),
      title: this._titleRef.nativeElement.value,
      body: this._contentRef.nativeElement.value,
      img: this._imgRef.nativeElement.value
    }

    this.postArr.push(newPost);
    this._snackBar.showSuccess('Post added successfully');

    this._titleRef.nativeElement.value = "";
    this._contentRef.nativeElement.value = "";
    this._imgRef.nativeElement.value = "";
  }

  onPostEdit(post: Ipost) {
    this._titleRef.nativeElement.value = post.title
    this._contentRef.nativeElement.value = post.body
    this._imgRef.nativeElement.value = post.img

    this.editId = post.id;
    this.isInEditMode = true;
  }

  onPostUpdate() {
    let updateId = this.editId;

    let updatedPost = {
      id: updateId,
      title: this._titleRef.nativeElement.value,
      body: this._contentRef.nativeElement.value,
      img: this._imgRef.nativeElement.value
    }

    let getIndex = this.postArr.findIndex(p => p.id === updateId);

    this.postArr[getIndex] = updatedPost;
    this._snackBar.showSuccess(`Post Updated successfully wiht id ${updateId}`);

    this._titleRef.nativeElement.value = ""
    this._contentRef.nativeElement.value = ""
    this._imgRef.nativeElement.value = ""

    this.isInEditMode = false,
      this.editId = ''
  }

  onPostDelete(deleteId: string) {
    const getConfirm = confirm(`Are you sure, you want to delete this post with id ${deleteId}`);

    if (getConfirm) {
      let getIndex = this.postArr.findIndex(post => post.id === deleteId);
      if (getIndex === -1) {
        this._snackBar.showSuccess(`Student Not Found with Id ${deleteId}`)
      }
      this.postArr.splice(getIndex, 1);

      this._snackBar.showSuccess(`Post deleted successfully with id ${deleteId}`)
    }
  }

  constructor(private _UniqueIdService: UniqueIdService, private _snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

}
