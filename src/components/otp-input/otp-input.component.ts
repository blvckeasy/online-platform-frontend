import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OtpInputService } from '../../app/services/otp-input.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [],
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.css'],
  providers: [
    OtpInputService,
    Router
  ]
})
export class OtpInputComponent implements OnInit {
    public inputValueSubject = new BehaviorSubject<string>('');
    otpInputValue$ = this.inputValueSubject.asObservable();

    constructor (
        private otpInputService: OtpInputService,
        private router: Router,
    ) {}

  ngOnInit(): void {
    const inputs: any = document.querySelectorAll("#otp-input input");

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      input.addEventListener("input", async (event: any) => {
        // handling normal input
        if (input.value.length == 1 && i + 1 < inputs.length) {
          inputs[i + 1].focus();
        }

        // if a value is pasted, put each character to each of the next input
        if (input.value.length > 1) {
          // sanitise input
          if (isNaN(input.value)) {
            input.value = "";
            await updateInput.call(this);
            return;
          }

          // split characters to array
          const chars = input.value.split('');

          for (let pos = 0; pos < chars.length; pos++) {
            // if length exceeded the number of inputs, stop
            if (pos + i >= inputs.length) break;

            // paste value
            let targetInput = inputs[pos + i];
            targetInput.value = chars[pos];
          }

          // focus the input next to the last pasted character
          let focus_index = Math.min(inputs.length - 1, i + chars.length);
          inputs[focus_index].focus();
        }
        await updateInput.call(this);
      });

      input.addEventListener("keydown", async (event: any) => {
        // backspace button
        if (event.keyCode == 8 && input.value == '' && i != 0) {
          // shift next values towards the left
          for (let pos = i; pos < inputs.length - 1; pos++) {
            inputs[pos].value = inputs[pos + 1].value;
          }

          // clear previous box and focus on it
          inputs[i - 1].value = '';
          inputs[i - 1].focus();
          await updateInput.call(this);
          return;
        }

        // delete button
        if (event.keyCode == 46 && i != inputs.length - 1) {
          // shift next values towards the left
          for (let pos = i; pos < inputs.length - 1; pos++) {
            inputs[pos].value = inputs[pos + 1].value;
          }

          // clear the last box
          inputs[inputs.length - 1].value = '';
          input.select();
          event.preventDefault();
          await updateInput.call(this);
          return;
        }

        // left button
        if (event.keyCode == 37) {
          if (i > 0) {
            event.preventDefault();
            inputs[i - 1].focus();
            inputs[i - 1].select();
          }
          return;
        }

        // right button
        if (event.keyCode == 39) {
          if (i + 1 < inputs.length) {
            event.preventDefault();
            inputs[i + 1].focus();
            inputs[i + 1].select();
          }
          return;
        }
      });
    }

    const updateInput = async function (this: OtpInputComponent) {
        const inputValue = Array.from(inputs).reduce(function (otp: any, input: any) {
            otp += input.value.length ? input.value : ' ';
            return otp;
        }, '') as string;

        const inputNameOtp = document.querySelector('input[name=otp]') as any;
        inputNameOtp.value = inputValue;

        this.inputValueSubject.next(inputValue.trim());

        const code = this.inputValueSubject.value;
        console.log(code, code.length);
        if (code.length == 6) {
            const result = await this.otpInputService.login(parseInt(code, 10)) as any;

            if (result.errors) {
                alert(result.errors[0].message);
                return;
            }
    
            const { token, user } = result.data.register;

            window.localStorage.setItem('user', JSON.stringify(user));
            window.localStorage.setItem('token', JSON.stringify(token));
    
            this.router.navigate(['/']);

            return;
        }

        return inputValue;
    }.bind(this);
  }
}
