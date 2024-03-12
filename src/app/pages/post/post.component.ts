import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgFor,NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgFor,NgIf, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
private ps = inject(PostService)
}
