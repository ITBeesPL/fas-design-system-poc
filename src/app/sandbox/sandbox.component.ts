import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {
  value = 'abcd';
}
