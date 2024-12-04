import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comment, Comments } from './comment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, DatePipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  commentText: string = '';
  comments = Comments; 
  addComment() {
    if (this.commentText.trim() !== '') {
        const newComment = new Comment(
            this.comments.length + 1, 
            this.commentText
        );
        
        newComment.addComment();
        
        this.commentText = '';
    }
}
}
